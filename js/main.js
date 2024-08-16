AOS.init();

const body = document.querySelector('body')
const header = document.querySelector('.header')
const burger = document.querySelector('#burger')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('scroll-lock')
})

const headerLink = document.getElementsByClassName('header__link')

for (let i = 0; i <= headerLink.length; i++) {
  headerLink[i].addEventListener('click', () => {
    body.classList.remove('scroll-lock')
    header.classList.remove('active')
  })
}