const navToggle = document.getElementsByClassName('toggle-icon')[0]
const navBar = document.getElementsByClassName('nav-bar')[0]

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('active')
})