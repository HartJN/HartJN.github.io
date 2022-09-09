// BACKGROUND CANVAS

// const canvas = document.getElementById('canvas-2')
const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray

// Get mouse position

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 120) * (canvas.width / 120),
}

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x
  mouse.y = e.y
})

// Creates randomised particles

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
  }
  // Method to draw individual particles
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    ctx.fillStyle = 'rgb(88, 166, 255, 0.2)'
    ctx.fill()
  }

  // Check particle position, check mouse position, move the particle, draw the particle
  update(n = 1) {
    // check if particle is still within canvas
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY
    }
    // Collision Detection, mouse position, particle position
    let dx = mouse.x - this.x
    let dy = mouse.y - this.y
    // move particle
    this.x += this.directionX * n
    this.y += this.directionY * n
    // Draw particle
    this.draw()
  }
}

// Create particle array
// to adjust particles number of particles -> for (let i = 0; i < numberOfParticles * (number); i++)
// to adjust size of particles -> let size = Math.random() * (value) + 1
// to adjust speed x - > let directionX = Math.random() * (value) - 2.5
// to adjust speed y - > let directionY = Math.random() * (value) - 2.5
// to adjust color of particle -> let color = 'rgba()'

function init() {
  particlesArray = []
  let numberOfParticles = (canvas.height * canvas.width) / 9000
  for (let i = 0; i < numberOfParticles * 0.05; i++) {
    let size = Math.random() * 2 + 1
    let x = Math.random() * (innerWidth - size * 2 - size * 2 + size * 2)
    let y = Math.random() * (innerHeight - size * 2 - size * 2 + size * 2)
    const theta = Math.random() * 2 * Math.PI
    let directionX = Math.cos(theta) * 2.5
    let directionY = Math.sin(theta) * 2.5
    let color = 'rgba(88, 166, 255, 0.1)'

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
  }
}

// Check if particles are close enough to draw line between them

function connect() {
  let opacityValue = 1
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y)
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 15000
        ctx.strokeStyle = 'rgba(88,166,255, ' + opacityValue + ')'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
        ctx.stroke()
      }
    }
  }
}

const SPEED = 0.01
// Animation Loop

function animate(now) {
  const diff = now - previous
  previous = now
  ctx.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update(diff * SPEED)
  }
  connect()
  requestAnimationFrame(animate)
}

// Resize event

window.addEventListener('resize', function () {
  canvas.width = innerWidth
  canvas.height = innerHeight
  // mouse.radius = (canvas.height / 120) * (canvas.height / 120)
  init()
})

// mouse out event
window.addEventListener('mouseout', function () {
  mouse.x = undefined
  mouse.x = undefined
})

init()
let previous = performance.now()
requestAnimationFrame(animate)
