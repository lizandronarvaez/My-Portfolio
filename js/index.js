// Modo Oscuro
let buttonDark = document.querySelector(".enlace__icon");
buttonDark.addEventListener('click', () => {
    document.body.classList.toggle("modo__oscuro")
})

// Menu Hamburger
let menu = document.querySelector(".hamburger")
let navegacion = document.querySelectorAll(".navegacion__enlaces .navegacion__enlace")
menu.addEventListener('click', () => {
    navegacion.forEach(item => {
        if (item.style.display == "none") {
            item.style.display = "unset"
        } else {
            item.style.display = "none"
        }
    })
})