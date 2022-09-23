///////////////////////////////////////////////////////////
// Mobile Nav

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const nav = document.querySelector('nav')
const navMenuEl = document.querySelectorAll('.nav__list')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// Fix context menu

document.oncontextmenu = function () {
  return true
}
