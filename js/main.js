AOS.init();

const body = document.querySelector('body')
const header = document.querySelector('.header')
const burger = document.querySelector('#burger')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('scroll-lock')
})