let qrCode = document.getElementById("qrCode");
let image = document.getElementById("image");
let textInput = document.getElementById("textInput");
function generateQRCode() {
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInput.value}`;
}