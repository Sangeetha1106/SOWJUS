/* =========================================================
   CART.JS — Cart State & LocalStorage Management
   ========================================================= */

const CART_STORAGE_KEY = "sowjus_cart";

/**
 * Get current cart array from localStorage
 * Returns array of { productId, quantity, size }
 */
function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse cart from localStorage:", e);
    return [];
  }
}

/**
 * Save cart array to localStorage and update navbar badge
 */
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage:", e);
  }
  updateNavbarCartBadge();
}

/**
 * Add a product to the cart.
 * If product with same productId and size exists, increase quantity.
 * Returns updated cart item or null.
 */
function addToCart(productId, quantity = 1, size = "M") {
  const product = getProductById(productId);
  if (!product) return null;

  const cart = getCart();
  const qtyToAdd = parseInt(quantity, 10) || 1;

  // Find existing item with matching product ID and size
  const existingIndex = cart.findIndex(
    item => item.productId === productId && item.size === size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qtyToAdd;
  } else {
    cart.push({
      productId: productId,
      quantity: qtyToAdd,
      size: size
    });
  }

  saveCart(cart);
  return cart;
}

/**
 * Update quantity for an item at given index
 */
function updateCartItemQuantity(index, newQuantity) {
  const cart = getCart();
  if (index < 0 || index >= cart.length) return cart;

  const qty = parseInt(newQuantity, 10);
  if (qty > 0) {
    cart[index].quantity = qty;
    saveCart(cart);
  } else {
    cart.splice(index, 1);
    saveCart(cart);
  }
  return cart;
}

/**
 * Remove an item at given index
 */
function removeCartItem(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart(cart);
  }
  return cart;
}

/**
 * Calculate total quantity of items in cart
 */
function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (parseInt(item.quantity, 10) || 0), 0);
}

/**
 * Calculate total price sum of all items in cart
 */
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (!product) return total;
    const priceNum = parsePrice(product.price);
    return total + priceNum * (parseInt(item.quantity, 10) || 0);
  }, 0);
}

/**
 * Clear the cart
 */
function clearCart() {
  saveCart([]);
}

/**
 * Update cart count badge in navbar dynamically
 */
function updateNavbarCartBadge() {
  const count = getCartCount();
  const badgeElements = document.querySelectorAll(".cart-badge, #nav-cart-count");
  badgeElements.forEach(el => {
    if (el) {
      el.textContent = count;
      if (count > 0) {
        el.classList.add("has-items");
      } else {
        el.classList.remove("has-items");
      }
    }
  });
}

// Automatically update badge on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  updateNavbarCartBadge();
});
