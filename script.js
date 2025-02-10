document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar datos del formulario
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value || "No proporcionada";
    const paymentMethod = document.getElementById("payment-method").value;

    // Construir el mensaje de WhatsApp
    let message = `Nuevo pedido de ${name}:\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Dirección: ${address}\n`;
    message += `Método de pago: ${paymentMethod}\n\n`;
    message += "Productos:\n";
    cart.forEach(item => {
        message += `- ${item.name} ($${item.price})\n`;
    });
    message += `\nTotal: $${total}`;

    // Redirigir a WhatsApp
    const whatsappUrl = `https://wa.me/TU_NUMERO?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Mostrar mensaje de confirmación
    document.getElementById("confirmation-message").textContent =
        "¡Tu pedido ha sido enviado! Pronto nos comunicaremos contigo.";
});
