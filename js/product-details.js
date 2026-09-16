/* =========================================================
   PRODUCT-DETAILS.JS
   Renders product-details.html?id=<product-id> using the
   product object matching URL id from js/products.js
   ========================================================= */

function renderProductDetails(){
  // Extract product ID from URL query string (?id=...), searchParams, sessionStorage, hash, or pathname
  const urlObj = new URL(window.location.href);
  let id = urlObj.searchParams.get("id") || urlObj.searchParams.get("productId") || urlObj.searchParams.get("product");
  
  if (!id) {
    for (const [key, val] of urlObj.searchParams.entries()) {
      if (val && getProductById(val)) {
        id = val;
        break;
      }
      if (key && getProductById(key)) {
        id = key;
        break;
      }
    }
  }

  // Check sessionStorage if URL query param was stripped or clean route /product-details opened
  if (!id) {
    const storedId = sessionStorage.getItem("selectedProductId");
    if (storedId && getProductById(storedId)) {
      id = storedId;
    }
  }

  if (!id && window.location.hash) {
    const hashId = window.location.hash.replace('#', '').trim();
    if (getProductById(hashId)) {
      id = hashId;
    }
  }
  
  if (!id) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && lastPart !== "product-details" && lastPart !== "product-details.html") {
      id = decodeURIComponent(lastPart);
    }
  }

  let initialProduct = id ? getProductById(id) : null;
  if (!initialProduct && !id && typeof PRODUCTS !== "undefined" && PRODUCTS.length > 0) {
    initialProduct = PRODUCTS[0];
  }

  function loadActiveProduct(targetProduct){
    if(!targetProduct) return;
    const product = targetProduct;
    sessionStorage.setItem("selectedProductId", product.id);

    // Update URL query string without reloading page
    if (window.history && window.history.replaceState) {
      const newUrl = `${window.location.pathname}?id=${encodeURIComponent(product.id)}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);
    }

    const wrap = document.getElementById("pd-wrap");
    const notFound = document.getElementById("pd-not-found");

    if(!product){
      if(wrap) wrap.style.display = "none";
      if(notFound) notFound.style.display = "block";
      return;
    }
    if(wrap) wrap.style.display = "grid";
    if(notFound) notFound.style.display = "none";

    // Page Title
    document.title = `${product.name} — Sowju's Comfort Wear`;

    // --- Dynamic Breadcrumb ---
    const breadcrumbEl = document.getElementById("pd-breadcrumb");
    if(breadcrumbEl){
      const catLabel = (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[product.category]) || product.category || "Collection";
      const sectionName = product.section === "girls" ? "Kids" : "Women";
      const sectionUrl = product.section === "girls" 
        ? `kids.html?category=${encodeURIComponent(product.category)}` 
        : `women.html?category=${encodeURIComponent(product.category)}`;
        
      breadcrumbEl.innerHTML = `
        <a href="index.html">Home</a> / 
        <a href="${sectionUrl}">${sectionName}</a> / 
        <a href="${sectionUrl}">${catLabel}</a> / 
        <span>${product.name}</span>
      `;
    }

    // --- Product Information Fields ---
    const nameEl = document.getElementById("pd-name");
    if(nameEl) nameEl.textContent = product.name;

    const skuEl = document.getElementById("pd-sku-val");
    if(skuEl) skuEl.textContent = product.sku || product.id.toUpperCase();

    const priceEl = document.getElementById("pd-price-val");
    if(priceEl) priceEl.textContent = formatPrice(product.price);

    const catBadgeEl = document.getElementById("pd-category-badge");
    if(catBadgeEl) catBadgeEl.textContent = product.category || "";

    const descEl = document.getElementById("pd-description");
    if(descEl) descEl.textContent = product.description || "";

    const fabricBlock = document.getElementById("pd-fabric-block");
    const fabricVal = document.getElementById("pd-fabric-val");
    if(product.fabric && fabricVal){
      fabricVal.textContent = product.fabric;
      if(fabricBlock) fabricBlock.style.display = "block";
    } else if(fabricBlock){
      fabricBlock.style.display = "none";
    }

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
    if(sizesEl && product.sizes && product.sizes.length){
      sizesEl.innerHTML = product.sizes.map((s, idx) => `
        <button class="swatch-btn ${idx === 0 ? 'active' : ''}" type="button" data-size="${s}">${s}</button>
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

    // Render Colours as selectable chips
    const coloursBlock = document.getElementById("pd-colours-block");
    const coloursEl = document.getElementById("pd-colours");
    if(coloursEl && product.colours && product.colours.length){
      coloursEl.innerHTML = product.colours.map((c, idx) => `
        <button class="color-chip ${idx === 0 ? 'active' : ''}" type="button" data-color="${c}">${c}</button>
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

    if(qtyInput) qtyInput.value = currentQty;

    if(qtyMinus && qtyPlus && qtyInput){
      const newMinus = qtyMinus.cloneNode(true);
      const newPlus = qtyPlus.cloneNode(true);
      qtyMinus.parentNode.replaceChild(newMinus, qtyMinus);
      qtyPlus.parentNode.replaceChild(newPlus, qtyPlus);

      newMinus.addEventListener("click", () => {
        if(currentQty > 1){
          currentQty--;
          qtyInput.value = currentQty;
          updateWhatsAppLink();
        }
      });
      newPlus.addEventListener("click", () => {
        currentQty++;
        qtyInput.value = currentQty;
        updateWhatsAppLink();
      });
    }

    // Highlights / Features
    const featuresBlock = document.getElementById("pd-features-block");
    const featuresEl = document.getElementById("pd-features");
    if(featuresEl && product.features && product.features.length){
      featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join("");
      if(featuresBlock) featuresBlock.style.display = "block";
    } else if(featuresBlock){
      featuresBlock.style.display = "none";
    }

    // --- Dynamic WhatsApp Link Builder ---
    function updateWhatsAppLink(){
      const priceText = formatPrice(product.price);
      const msg = `Hi Sowju's Comfort Wear, I would like to order / enquire about ${product.name} (SKU: ${product.sku || product.id}).\n` +
        `Price: ${priceText}\n` +
        `Size: ${selectedSize}\n` +
        `Colour: ${selectedColor}\n` +
        `Quantity: ${currentQty}\n` +
        `Please share availability and order confirmation details.`;

      const enquireBtn = document.getElementById("pd-enquire-btn");
      if(enquireBtn) enquireBtn.href = buildWhatsAppLink(msg);
    }

    // Add to Cart handler
    const addToCartBtn = document.getElementById("pd-add-to-cart-btn");
    if(addToCartBtn){
      const newAddToCartBtn = addToCartBtn.cloneNode(true);
      addToCartBtn.parentNode.replaceChild(newAddToCartBtn, addToCartBtn);
      newAddToCartBtn.addEventListener("click", () => {
        if(typeof addToCart === "function"){
          addToCart(product.id, currentQty, selectedSize);
          showToast(`Added ${product.name} (Qty: ${currentQty}, Size: ${selectedSize}) to your cart!`);
        }
      });
    }

    // Initial Link Update
    updateWhatsAppLink();

    // --- Category Product Thumbnails & Carousel ---
    // Fetch all products in the same category so each thumbnail represents its own product
    const categoryProducts = getProductsByCategory(product.category);
    const thumbProducts = (categoryProducts && categoryProducts.length > 0) ? categoryProducts : [product];
    
    let activeProductIndex = thumbProducts.findIndex(p => p.id === product.id);
    if (activeProductIndex === -1) activeProductIndex = 0;

    const mainArtContainer = document.getElementById("pd-main-art");
    const thumbsContainer = document.getElementById("pd-thumbnails");

    // Render Main Art Container
    if(mainArtContainer){
      mainArtContainer.innerHTML = `
        <div class="art-frame art-${product.art || 1} pd-main-frame">
          <img id="pd-main-img" src="${product.image}" alt="${product.name}">
          ${thumbProducts.length > 1 ? `
            <button class="gallery-nav prev" id="pd-prev-btn" type="button" aria-label="Previous product">&#10094;</button>
            <button class="gallery-nav next" id="pd-next-btn" type="button" aria-label="Next product">&#10095;</button>
            <div class="gallery-counter">${activeProductIndex + 1} / ${thumbProducts.length}</div>
          ` : ''}
        </div>
      `;

      const prevBtn = document.getElementById("pd-prev-btn");
      const nextBtn = document.getElementById("pd-next-btn");
      if(prevBtn) prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const prevIndex = (activeProductIndex - 1 + thumbProducts.length) % thumbProducts.length;
        loadActiveProduct(thumbProducts[prevIndex]);
      });
      if(nextBtn) nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextIndex = (activeProductIndex + 1) % thumbProducts.length;
        loadActiveProduct(thumbProducts[nextIndex]);
      });
    }

    // Render Category Product Thumbnails
    if(thumbsContainer){
      if(thumbProducts.length > 1){
        thumbsContainer.innerHTML = thumbProducts.map((p, idx) => `
          <button class="thumb-btn ${p.id === product.id ? 'active' : ''}" type="button" data-product-id="${p.id}" title="${p.name}">
            <img src="${p.image}" alt="${p.name} thumbnail">
          </button>
        `).join("");

        thumbsContainer.querySelectorAll(".thumb-btn").forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute("data-product-id");
            const targetProd = getProductById(targetId);
            if(targetProd && targetProd.id !== product.id){
              loadActiveProduct(targetProd);
            }
          });
        });
        thumbsContainer.style.display = "flex";
      } else {
        thumbsContainer.style.display = "none";
      }
    }

    // --- Related Products (STRICTLY FROM THE SAME CATEGORY, EXCLUDING ACTIVE PRODUCT) ---
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relatedSection = document.getElementById("pd-related-section");
    const relatedGrid = document.getElementById("pd-related-grid");
    if(related.length && relatedGrid){
      relatedGrid.innerHTML = related.map(productCardHTML).join("");
      if(relatedSection) relatedSection.style.display = "block";
    } else if(relatedSection){
      relatedSection.style.display = "none";
    }

    if(typeof observeReveals === "function") observeReveals();
  }

  function showToast(message) {
    let toast = document.querySelector(".cart-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "cart-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${message}</span>`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Initial render
  loadActiveProduct(initialProduct);
}

document.addEventListener("DOMContentLoaded", renderProductDetails);

