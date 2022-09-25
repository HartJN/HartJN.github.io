'use strict'

///////////////////////////////////////////////////////////
// Mobile Nav

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const nav = document.querySelector('nav')
const navMenuEl = document.querySelectorAll('.nav__list')
const homeRightEl = document.querySelector('.home-right')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// Fix context menu

document.oncontextmenu = function () {
  return true
}

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.header').querySelector('.logo')
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))
