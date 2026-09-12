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

  document.getElementById("pd-art").innerHTML = artFrameHTML(product, "pd-art-frame");
  document.getElementById("pd-category").textContent = CATEGORY_LABELS[product.category];
  document.getElementById("pd-name").textContent = product.name;
  document.getElementById("pd-description").textContent = product.description;
  document.getElementById("pd-breadcrumb-name").textContent = product.name;

  const sizesEl = document.getElementById("pd-sizes");
  sizesEl.innerHTML = product.sizes.map(s => `<span class="size-pill">${s}</span>`).join("");

  const coloursBlock = document.getElementById("pd-colours-block");
  const coloursEl = document.getElementById("pd-colours");
  if(product.colours && product.colours.length){
    coloursEl.innerHTML = product.colours.map(c => `<span class="size-pill">${c}</span>`).join("");
    coloursBlock.style.display = "block";
  } else {
    coloursBlock.style.display = "none";
  }

  document.getElementById("pd-features").innerHTML = product.features.map(f => `<li>${f}</li>`).join("");

  const enquireBtn = document.getElementById("pd-enquire-btn");
  enquireBtn.href = buildWhatsAppLink(enquiryMessageFor(product));

  const related = getRelatedProducts(product, 3);
  const relatedSection = document.getElementById("pd-related-section");
  if(related.length){
    document.getElementById("pd-related-grid").innerHTML = related.map(productCardHTML).join("");
  } else {
    relatedSection.style.display = "none";
  }

  observeReveals();
}

document.addEventListener("DOMContentLoaded", renderProductDetails);
