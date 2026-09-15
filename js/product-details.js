/* =========================================================
   PRODUCT-DETAILS.JS
   Renders product-details.html?id=<product-id> using the
   data in js/products.js
   ========================================================= */

function renderProductDetails(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = id ? getProductById(id) : null;
  const wrap = document.getElementById("pd-wrap");
  const notFound = document.getElementById("pd-not-found");

  if(!product){
    if(wrap) wrap.style.display = "none";
    if(notFound) notFound.style.display = "block";
    return;
  }
  if(notFound) notFound.style.display = "none";

  document.title = `${product.name} — Sowju's Comfort Wear`;

  // --- Dynamic Breadcrumb ---
  const breadcrumbEl = document.getElementById("pd-breadcrumb");
  if(breadcrumbEl){
    const catLabel = CATEGORY_LABELS[product.category] || "Collection";
    const sectionName = product.section === "girls" ? "Kids" : "Women";
    const sectionUrl = product.section === "girls" 
      ? `kids.html?category=${product.category}` 
      : `women.html?category=${product.category}`;
      
    breadcrumbEl.innerHTML = `
      <a href="index.html">Home</a> / 
      <a href="${sectionUrl}">${sectionName}</a> / 
      <a href="${sectionUrl}">${catLabel}</a> / 
      <span>${product.name}</span>
    `;
  }

  // --- Image Gallery Logic ---
  const galleryImages = (product.images && product.images.length > 0) 
    ? product.images 
    : (product.image ? [product.image] : []);

  const mainArtContainer = document.getElementById("pd-main-art");
  const thumbsContainer = document.getElementById("pd-thumbnails");

  function renderMainImage(imgSrc){
    if(mainArtContainer){
      if(imgSrc){
        mainArtContainer.innerHTML = `<div class="art-frame art-${product.art || 1} pd-main-frame"><img src="${imgSrc}" alt="${product.name}"></div>`;
      } else {
        mainArtContainer.innerHTML = artFrameHTML(product, "pd-main-frame");
      }
    }
  }

  // Initial main image
  renderMainImage(galleryImages[0] || null);

  // Render Thumbnails if more than 1 image exists for this product
  if(thumbsContainer){
    if(galleryImages.length > 1){
      thumbsContainer.innerHTML = galleryImages.map((img, idx) => `
        <button class="thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${img}">
          <img src="${img}" alt="${product.name} view ${idx + 1}">
        </button>
      `).join("");

      thumbsContainer.querySelectorAll(".thumb-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          thumbsContainer.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const src = btn.getAttribute("data-src");
          renderMainImage(src);
        });
      });
      thumbsContainer.style.display = "flex";
    } else {
      thumbsContainer.style.display = "none";
    }
  }

  // --- Product Information Fields ---
  document.getElementById("pd-category").textContent = CATEGORY_LABELS[product.category] || product.category;
  document.getElementById("pd-name").textContent = product.name;
  document.getElementById("pd-description").textContent = product.description;

  const sizesBlock = document.getElementById("pd-sizes-block");
  const sizesEl = document.getElementById("pd-sizes");
  if(product.sizes && product.sizes.length){
    sizesEl.innerHTML = product.sizes.map(s => `<span class="size-pill">${s}</span>`).join("");
    if(sizesBlock) sizesBlock.style.display = "block";
  } else if(sizesBlock){
    sizesBlock.style.display = "none";
  }

  const coloursBlock = document.getElementById("pd-colours-block");
  const coloursEl = document.getElementById("pd-colours");
  if(product.colours && product.colours.length){
    coloursEl.innerHTML = product.colours.map(c => `<span class="size-pill">${c}</span>`).join("");
    if(coloursBlock) coloursBlock.style.display = "block";
  } else if(coloursBlock){
    coloursBlock.style.display = "none";
  }

  const featuresBlock = document.getElementById("pd-features-block");
  const featuresEl = document.getElementById("pd-features");
  if(product.features && product.features.length){
    featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join("");
    if(featuresBlock) featuresBlock.style.display = "block";
  } else if(featuresBlock){
    featuresBlock.style.display = "none";
  }

  // --- WhatsApp Action Buttons ---
  const whatsappMsg = buildWhatsAppLink(enquiryMessageFor(product));
  const enquireBtn = document.getElementById("pd-enquire-btn");
  if(enquireBtn) enquireBtn.href = whatsappMsg;

  const whatsappBtn = document.getElementById("pd-whatsapp-btn");
  if(whatsappBtn) whatsappBtn.href = whatsappMsg;

  // --- Related Products (STRICTLY FROM THE SAME EXACT CATEGORY ONLY) ---
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const relatedSection = document.getElementById("pd-related-section");
  if(related.length){
    document.getElementById("pd-related-grid").innerHTML = related.map(productCardHTML).join("");
    if(relatedSection) relatedSection.style.display = "block";
  } else if(relatedSection){
    relatedSection.style.display = "none";
  }

  observeReveals();
}

document.addEventListener("DOMContentLoaded", renderProductDetails);
