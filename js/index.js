// Modo Oscuro
let buttonDark = document.querySelector(".enlace__icon");
buttonDark.addEventListener('click', () => {
    document.body.classList.toggle("modo__oscuro")
})

// Menu Hamburger
let menu = document.querySelector(".hamburger")
let navegacion = document.querySelector(".navegacion__enlaces")
menu.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar__enlaces')
})