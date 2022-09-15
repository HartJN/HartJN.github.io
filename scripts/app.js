///////////////////////////////////////////////////////////
// Mobile Nav

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const nav = document.querySelector('nav')
const navMenuEl = document.querySelectorAll('.nav__list')
// const contactEl = document.querySelector('.contact')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
  if (contactEl !== null) contactEl.classList.toggle('disable-display')

  // nav.addEventListener('click', () => {
  //   headerEl.classList.remove('nav-open')
  //   if (contactEl !== null) contactEl.classList.toggle('disable-display')
  // })
})

// Fix context menu

document.oncontextmenu = function () {
  return true
}

const exampleBtnEl = document.querySelector('.btn-example')
const img = document.querySelector('.heart-img')

img.addEventListener('click', function () {
  if (this.srcset === '/blog/imgs/heart-outline-noBG.webp') {
    this.srcset = '/blog/imgs/heart-colour-noBG.webp'
  } else {
    this.srcset = '/blog/imgs/heart-outline-noBG.webp'
  }
})
