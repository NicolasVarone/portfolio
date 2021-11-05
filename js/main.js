import gsap from 'gsap'

/* CURSOR */
let mouse = document.querySelector('.cursor')
let mouseText = document.querySelector('.cursor-text')

const cursor = (e) => {
  mouse.style.top = e.pageY + 'px'
  mouse.style.left = e.pageX + 'px'
}

const activeCursor = (e) => {
  const item = e.target
  if (item.classList.contains('name')) {
    mouse.classList.add('active', 'red-color')
    mouseText.innerText = 'CLICK'
  } else if (item.classList.contains('nav-item-red')) {
    mouse.classList.add('active', 'purple-color')
    mouseText.innerText = 'CLICK'
  } else if (item.classList.contains('nav-item-orange')) {
    mouse.classList.add('active', 'orange-color')
    mouseText.innerText = 'CLICK'
  } else if (item.classList.contains('nav-item-green')) {
    mouse.classList.add('active', 'green-color')
    mouseText.innerText = 'CLICK'
  } else {
    mouse.classList.remove(
      'active',
      'purple-color',
      'red-color',
      'orange-color',
      'green-color'
    )
    mouseText.innerText = ''
  }
}

window.addEventListener('mousemove', cursor)
window.addEventListener('mouseover', activeCursor)

/* HERO TITLE ANIMATION */
gsap.from('.header', {
  y: -100,
  duration: 1,
  delay: 0.8,
  opacity: 0,
  ease: 'power3.inOut',
})

gsap.from('.line1', {
  y: 100,
  duration: 1,
  opacity: 0,
  ease: 'power3.inOut',
})

gsap.from('.line2', {
  y: 100,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  ease: 'power3.inOut',
})
