const tabs = document.querySelectorAll('.tab')
const tabsContainer = document.querySelector('.tab-container')
const tabsContent = document.querySelectorAll('.tab__content')

tabsContainer.addEventListener('click', function (e) {
  console.log(e, 'CLICK tab container')
  const clicked = e.target.closest('.tab')

  if (!clicked) return

  tabs.forEach(t => t.classList.remove('tab--active'))
  tabsContent.forEach(c => c.classList.remove('tab__content--active'))

  clicked.classList.add('tab--active')

  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add('tab__content--active')
})
