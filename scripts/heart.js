const exampleBtnEl = document.querySelector('.btn-example')
const img = document.querySelector('.heart-img')

img.addEventListener('click', function () {
  if (this.srcset === '/blog/imgs/heart-outline-noBG.webp') {
    this.srcset = '/blog/imgs/heart-colour-noBG.webp'
  } else {
    this.srcset = '/blog/imgs/heart-outline-noBG.webp'
  }
})
