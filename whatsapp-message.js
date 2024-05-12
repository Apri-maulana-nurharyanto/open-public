let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let message = document.getElementById('message').value;
let job = document.getElementById('status').value;

function sendMessageToWhatsapp() {
    const urlToWhatsapp = `https://wa.me/62895413011080?text=nama = ${username}, email = ${email}, nomor telepon = ${phone}, pesan = ${message}, status = ${job}`;

    window.open(urlToWhatsapp, "_blank");
}