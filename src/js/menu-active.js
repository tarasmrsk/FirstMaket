const menuMobile = document.querySelectorAll('.link__menu')
const menuNav = document.querySelectorAll('.nav__link')

menuMobile.forEach((item) => {
  item.addEventListener('click', () => {
    menuMobile.forEach((item) => {
      item.classList.remove('link__menu--active')
    })
    item.classList.add('link__menu--active')
  })
})

menuNav.forEach((item) => {
  item.addEventListener('click', () => {
    menuNav.forEach((item) => {
      item.classList.remove('nav__link--active')
    })
    item.classList.add('nav__link--active')
  })
})

menuMobile[0].classList.add('link__menu--active')
menuNav[0].classList.add('nav__link--active')
