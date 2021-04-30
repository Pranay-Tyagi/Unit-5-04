document.querySelector('.image-btn').addEventListener('click', function () {
  document.querySelector('.image').src = './images/landscape.jpg'
})

document.querySelector('.text-btn').addEventListener('click', function () {
  document.querySelector('.text').innerHTML = 'Landscape'
})

document.querySelector('.hide-btn').addEventListener('click', function () {
  document.querySelector('.text').style.display = 'None'
})

document.querySelector('.show-btn').addEventListener('click', function () {
  document.querySelector('.text').style.display = 'block'
})

document.querySelector('.color-btn').addEventListener('click', function () {
  document.body.style.background = 'red'
})