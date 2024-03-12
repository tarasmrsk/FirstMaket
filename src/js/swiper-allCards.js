let swiperBrands = document.querySelector('.slider-1')
let swiperEquipment = document.querySelector('.slider-2')
let buttonBrands = document.querySelector('.buttonBrands')
let buttonEquipment = document.querySelector('.buttonEquipment')

buttonBrands.onclick = function () {
  swiperBrands.classList.toggle('click-mode'),
  buttonBrands.classList.toggle('close-button')
  'Показать все' == buttonBrands.textContent
    ? (buttonBrands.textContent = 'Скрыть')
    : (buttonBrands.textContent = 'Показать все')
}

buttonEquipment.onclick = function () {
  swiperEquipment.classList.toggle('click-mode'),
  buttonEquipment.classList.toggle('close-button')
  'Показать все' == buttonEquipment.textContent
    ? (buttonEquipment.textContent = 'Скрыть')
    : (buttonEquipment.textContent = 'Показать все')
}