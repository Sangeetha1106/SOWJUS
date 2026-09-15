/* =========================================================
   MAIN.JS — shared behaviour across every page
   ========================================================= */

const WHATSAPP_NUMBER = "919789672893"; // update here if the number changes

function buildWhatsAppLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function enquiryMessageFor(product){
  return `Hi Sowju's Comfort Wear, I am interested in the ${product.name}. Please share the price, available sizes and details.`;
}

/* ---------------- garment illustrations ----------------
   Used as placeholder art everywhere a real product photo will
   eventually go. Each garment silhouette is filled with a small
   fashion-illustration pattern (floral / dotted / striped / plain)
   that matches the product's own description, so cards read like
   a designed catalogue rather than a plain sketch. Swap for real
   <img> tags once photos are available — see README section 3.  */

let __svgClipCounter = 0;

const GARMENT_OUTLINES = {
  dress: "M40 6 L28 16 L33 25 L40 19 V32 C22 38 14 58 14 84 L18 108 H76 L80 84 C80 58 72 38 54 32 V19 L61 25 L66 16 L54 6 C54 12 50 16 47 16 C44 16 40 12 40 6 Z",
  coord: "M32 10 L20 22 L26 30 L32 24 V46 H68 V24 L74 30 L80 22 L68 10 C68 16 60 20 50 20 C40 20 32 16 32 10 Z M34 54 H66 L64 108 L54 108 L51 70 L48 108 L38 108 Z",
  "kids-dress": "M38 8 L28 18 L33 26 L38 20 V30 C24 34 18 50 18 66 L20 100 H62 L64 66 C64 50 58 34 44 30 V20 L49 26 L54 18 L44 8 C44 13 41 16 41 16 C41 16 38 13 38 8 Z",
  "kids-coord": "M34 12 L24 22 L29 29 L34 24 V40 H60 V24 L65 29 L70 22 L60 12 C60 17 53 20 47 20 C41 20 34 17 34 12 Z M36 46 H58 L57 92 L48 92 L46 64 L44 92 L35 92 Z"
};

function patternMarks(pattern){
  const dot = (x,y,r,c,o) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity="${o}"/>`;
  const flower = (x,y,scale,c) => {
    const r = 2.1*scale;
    let petals = "";
    const offs = [[0,-r],[r*0.87,-r*0.5],[r*0.87,r*0.5],[0,r],[-r*0.87,r*0.5],[-r*0.87,-r*0.5]];
    offs.forEach(o => { petals += dot(x+o[0], y+o[1], r*0.62, c, 0.55); });
    petals += dot(x, y, r*0.45, "var(--gold)", 0.75);
    return petals;
  };
  switch(pattern){
    case "floral": {
      const spots = [[24,20],[58,14],[40,34],[70,40],[18,52],[46,58],[64,66],[30,78],[54,86],[74,92],[22,98],[42,106]];
      const colors = ["var(--dusty-rose)","var(--maroon)"];
      return spots.map((s,i) => flower(s[0], s[1], 0.9 + (i % 3) * 0.15, colors[i % 2])).join("");
    }
    case "dots": {
      let out = "";
      const colors = ["var(--maroon)","var(--dusty-rose)","var(--gold)"];
      let i = 0;
      for(let y = 10; y < 118; y += 11){
        for(let x = 12; x < 92; x += 13){
          const jitterX = ((i * 7) % 5) - 2;
          const jitterY = ((i * 11) % 5) - 2;
          out += dot(x + jitterX, y + jitterY, 1.7, colors[i % colors.length], 0.55);
          i++;
        }
      }
      return out;
    }
    case "stripes": {
      let out = "";
      for(let x = -30; x < 140; x += 13){
        out += `<line x1="${x}" y1="-10" x2="${x+34}" y2="132" stroke="var(--dusty-rose)" stroke-width="4" opacity="0.32"/>`;
      }
      return out;
    }
    default: // "plain"
      return "";
  }
}

function garmentSVG(kind, pattern){
  const outline = GARMENT_OUTLINES[kind] || GARMENT_OUTLINES.dress;
  const clipId = `garment-clip-${__svgClipCounter++}`;
  const bow = kind === "kids-dress"
    ? `<circle cx="41" cy="46" r="3" style="fill:var(--dusty-rose);stroke:var(--maroon-deep);stroke-width:1"/>`
    : "";
  return `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <defs><clipPath id="${clipId}"><path d="${outline}"/></clipPath></defs>
    <g clip-path="url(#${clipId})">${patternMarks(pattern)}</g>
    <path d="${outline}" style="stroke:var(--maroon-deep);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"/>
    ${bow}
  </svg>`;
}

function artFrameHTML(product, extraClass){
  const artClass = `art-${product.art || 1}`;
  if(product.image){
    return `<div class="art-frame ${artClass} ${extraClass||''}"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>`;
  }
  return `<div class="art-frame ${artClass} ${extraClass||''}">${garmentSVG(product.icon, product.pattern)}</div>`;
}

/* ---------------- product card + category card templates ---------------- */
function productCardHTML(product){
  const priceText = product.price || "Rs. 699.00";
  return `
  <article class="product-card reveal">
    <a href="product-details.html?id=${product.id}" class="pc-image-link" aria-label="View ${product.name}">
      ${artFrameHTML(product)}
      <span class="pc-offer-badge">BUY 2 GET 100 OFF</span>
    </a>
    <div class="pc-body">
      <h3 class="pc-name"><a href="product-details.html?id=${product.id}">${product.name}</a></h3>
      <div class="pc-price-wrap">
        <span class="pc-price">${priceText}</span>
      </div>
    </div>
  </article>`;
}

function renderProductGrid(containerId, products, emptyMsg){
  const el = document.getElementById(containerId);
  if(!el) return;
  if(!products.length){
    el.innerHTML = `<div class="empty-state"><h3>No products found</h3><p>${emptyMsg || "Try a different search term or filter."}</p></div>`;
    return;
  }
  el.innerHTML = products.map(productCardHTML).join("");
  observeReveals();
}

/* ---------------- navbar: mobile menu + dropdowns ---------------- */
function initNavbar(){
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay-dim");

  function closeMenu(){
    navLinks && navLinks.classList.remove("open");
    overlay && overlay.classList.remove("show");
    document.querySelectorAll(".has-dropdown.mobile-open").forEach(li => li.classList.remove("mobile-open"));
  }

  if(hamburger && navLinks){
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      overlay && overlay.classList.toggle("show");
    });
  }
  overlay && overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".has-dropdown > a").forEach(link => {
    link.addEventListener("click", (e) => {
      if(window.innerWidth <= 980){
        e.preventDefault();
        link.parentElement.classList.toggle("mobile-open");
      }
    });
  });

  /* search toggle */
  const searchIcon = document.querySelector(".search-toggle");
  const searchBox = document.querySelector(".search-box");
  if(searchIcon && searchBox){
    searchIcon.addEventListener("click", () => {
      searchBox.classList.toggle("open");
      if(searchBox.classList.contains("open")){
        searchBox.querySelector("input").focus();
      }
    });
  }
  const searchForm = document.querySelector(".search-box form");
  if(searchForm){
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchForm.querySelector("input").value.trim();
      if(q){ window.location.href = `women.html?q=${encodeURIComponent(q)}`; }
    });
  }
}

/* ---------------- scroll reveal ---------------- */
function observeReveals(){
  const items = document.querySelectorAll(".reveal:not(.in)");
  if(!("IntersectionObserver" in window)){
    items.forEach(i => i.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => obs.observe(i));
}

/* ---------------- footer year ---------------- */
function setFooterYear(){
  const y = document.querySelector(".footer-year");
  if(y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  observeReveals();
  setFooterYear();
});
