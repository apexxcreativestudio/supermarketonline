const CART_STORAGE_KEY = 'freshmart-cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function showToast(message) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 500);
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const parsedQty = Number(quantity) > 0 ? Number(quantity) : 1;
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += parsedQty;
  } else {
    const product = getProductById(productId);
    if (!product) return;
    cart.push({ id: product.id, name: product.name, price: product.price, quantity: parsedQty, image: product.image });
  }

  saveCart(cart);
  updateCartCount();
  const product = getProductById(productId);
  if (product) {
    showToast('Added successfully');
  }
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  renderCartPage();
  updateCartCount();
}

function changeQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
  renderCartPage();
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((element) => {
    element.textContent = count;
  });
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCartPage() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  if (!cartItems || !cartTotal) return;

  const cart = getCart();

  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-state">Your cart is empty. Browse products and add your first item.</div>';
    cartTotal.innerHTML = '<p>No items yet.</p>';
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)} each</p>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <div>
        <p><strong>${formatPrice(item.price * item.quantity)}</strong></p>
        <button class="btn small-btn btn-secondary" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  cartTotal.innerHTML = `
    <p><strong>Subtotal:</strong> ${formatPrice(getCartTotal())}</p>
    <p>Delivery and service charges are arranged after confirmation.</p>
    <a class="btn btn-primary full-width" href="checkout.html">Checkout</a>
  `;
}
