document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCheckoutSummary();

  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const customerName = formData.get('name')?.toString().trim() || 'Customer';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const address = formData.get('address')?.toString().trim() || 'Not provided';
    const city = formData.get('city')?.toString().trim() || 'Not provided';
    const cart = getCart();

    if (!cart.length) {
      alert('Your cart is empty. Add products before placing an order.');
      return;
    }

    const itemsText = cart.map((item) => `- ${item.name} x${item.quantity} | ${formatPrice(item.price * item.quantity)}`).join('\n');
    const total = formatPrice(getCartTotal());
    const message = `🛒 FreshMart New Order%0A%0ACustomer Name: ${encodeURIComponent(customerName)}%0APhone: ${encodeURIComponent(phone)}%0A%0AItems:%0A${encodeURIComponent(itemsText)}%0A%0ATotal: ${encodeURIComponent(total)}%0ADelivery Address: ${encodeURIComponent(address + ', ' + city)}`;
    window.open(`https://wa.me/94725259852?text=${message}`, '_blank');
  });
});

function renderCheckoutSummary() {
  const checkoutItems = document.getElementById('checkout-items');
  const checkoutTotal = document.getElementById('checkout-total');

  if (!checkoutItems || !checkoutTotal) return;

  const cart = getCart();

  if (!cart.length) {
    checkoutItems.innerHTML = '<p>Your cart is empty.</p>';
    checkoutTotal.innerHTML = '<p>No total yet.</p>';
    return;
  }

  checkoutItems.innerHTML = cart.map((item) => `
    <div class="summary-box">
      <p><strong>${item.name}</strong> x${item.quantity}</p>
      <p>${formatPrice(item.price * item.quantity)}</p>
    </div>
  `).join('');

  checkoutTotal.innerHTML = `
    <p><strong>Total:</strong> ${formatPrice(getCartTotal())}</p>
    <p>We will confirm delivery details over WhatsApp.</p>
  `;
}
