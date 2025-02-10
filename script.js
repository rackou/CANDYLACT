let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartDisplay();
    alert(`${name} agregado al carrito.`);
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
        cartItemsElement.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });

    cartTotalElement.textContent = total;
}

function sendOrder() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let message = "Hola, quiero hacer un pedido:\n";
    cart.forEach(item => {
        message += `- ${item.name} ($${item.price})\n`;
    });
    message += `\nTotal: $${total}`;
    message += "\nPor favor, indícame el punto de entrega y el método de pago.";

    const whatsappUrl = `https://wa.me/+573203002596?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
