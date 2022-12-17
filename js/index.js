
// Menu Hamburger
let menu = document.querySelector(".hamburger")
let navegacion = document.querySelector(".navegacion__enlaces")
menu.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar__enlaces')
})
// Modo Oscuro
let buttonDark = document.querySelector(".enlace__icon");
let hamburger = document.querySelectorAll(".hamburger .hamburger__item")
buttonDark.addEventListener('click', () => {
    document.body.classList.toggle("modo__oscuro")
    hamburger.forEach(item => {
        item.style.backgroundColor == "white" ?
            item.style.backgroundColor = "black"
            : item.style.backgroundColor = "white"
    }
    )
})

