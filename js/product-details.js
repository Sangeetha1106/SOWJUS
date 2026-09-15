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
  const skuEl = document.getElementById("pd-sku-val");
  if(skuEl) skuEl.textContent = product.sku || `NTY-0101-${(product.id || 'N').slice(0,3).toUpperCase()}`;

  const priceEl = document.getElementById("pd-price-val");
  if(priceEl) priceEl.textContent = product.price || "Rs. 699.00";

  document.getElementById("pd-name").textContent = product.name;
  document.getElementById("pd-description").textContent = product.description;

  // Selected State
  let selectedSize = (product.sizes && product.sizes.length) ? product.sizes[0] : "Free Size";
  let selectedColor = (product.colours && product.colours.length) ? product.colours[0] : "Default";
  let currentQty = 1;

  const sizeLabelEl = document.getElementById("pd-selected-size-label");
  if(sizeLabelEl) sizeLabelEl.textContent = selectedSize;

  const colorLabelEl = document.getElementById("pd-selected-color-label");
  if(colorLabelEl) colorLabelEl.textContent = selectedColor;

  // Render Sizes as selectable boxes
  const sizesBlock = document.getElementById("pd-sizes-block");
  const sizesEl = document.getElementById("pd-sizes");
  if(product.sizes && product.sizes.length){
    sizesEl.innerHTML = product.sizes.map((s, idx) => `
      <button class="swatch-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
    `).join("");
    sizesEl.querySelectorAll(".swatch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        sizesEl.querySelectorAll(".swatch-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.getAttribute("data-size");
        if(sizeLabelEl) sizeLabelEl.textContent = selectedSize;
        updateWhatsAppLink();
      });
    });
    if(sizesBlock) sizesBlock.style.display = "block";
  } else if(sizesBlock){
    sizesBlock.style.display = "none";
  }

  // Render Colors as selectable chips
  const coloursBlock = document.getElementById("pd-colours-block");
  const coloursEl = document.getElementById("pd-colours");
  if(product.colours && product.colours.length){
    coloursEl.innerHTML = product.colours.map((c, idx) => `
      <button class="color-chip ${idx === 0 ? 'active' : ''}" data-color="${c}">${c}</button>
    `).join("");
    coloursEl.querySelectorAll(".color-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        coloursEl.querySelectorAll(".color-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.getAttribute("data-color");
        if(colorLabelEl) colorLabelEl.textContent = selectedColor;
        updateWhatsAppLink();
      });
    });
    if(coloursBlock) coloursBlock.style.display = "block";
  } else if(coloursBlock){
    coloursBlock.style.display = "none";
  }

  // Quantity Selector Controls (+ / -)
  const qtyInput = document.getElementById("qty-input");
  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");

  if(qtyMinus && qtyPlus && qtyInput){
    qtyMinus.addEventListener("click", () => {
      if(currentQty > 1){
        currentQty--;
        qtyInput.value = currentQty;
        updateWhatsAppLink();
      }
    });
    qtyPlus.addEventListener("click", () => {
      currentQty++;
      qtyInput.value = currentQty;
      updateWhatsAppLink();
    });
  }

  // Highlights
  const featuresBlock = document.getElementById("pd-features-block");
  const featuresEl = document.getElementById("pd-features");
  if(product.features && product.features.length){
    featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join("");
    if(featuresBlock) featuresBlock.style.display = "block";
  } else if(featuresBlock){
    featuresBlock.style.display = "none";
  }

  // --- Dynamic WhatsApp Link Builder ---
  function updateWhatsAppLink(){
    const priceText = product.price || "Rs. 699.00";
    const msg = `Hi Sowju's Comfort Wear, I would like to order / enquire about ${product.name} (SKU: ${product.sku || 'NTY'}).\n` +
      `Price: ${priceText}\n` +
      `Size: ${selectedSize}\n` +
      `Color: ${selectedColor}\n` +
      `Quantity: ${currentQty}\n` +
      `Please share availability and order confirmation details.`;

    const enquireBtn = document.getElementById("pd-enquire-btn");
    if(enquireBtn) enquireBtn.href = buildWhatsAppLink(msg);
  }

  // Initial Link Update
  updateWhatsAppLink();

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
