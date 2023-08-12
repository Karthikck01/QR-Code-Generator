import {API_URL} from './api.js';

const githubLink = document.getElementById("github-logo");
const QR_Link = document.getElementById("input-link");
const QR_size = document.getElementById("input-size");
const DisplayQR = document.getElementById("display-qr");

githubLink.addEventListener('click', handleClickEvent);
QR_Link.addEventListener('input', handleInput);
QR_size.addEventListener('input', handleInput);

let qr = {
    link: "",
    size: ""
}

function handleInput(event) {
    qr = {...qr , [event.target.name] : event.target.value}
    const image = `${API_URL}?data=${qr.link}&size=${qr.size}x${qr.size}`
    DisplayQR.setAttribute("src",image)
}

function handleClickEvent() {
    window.open("https://github.com/Karthikck01/QR-Code-Generator", "_blank")
}