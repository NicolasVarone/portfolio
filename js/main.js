/* CURSOR */
let mouse = document.querySelector('.cursor')
let mouseText = document.querySelector('.cursor-text')

const cursor = (e) => {
  mouse.style.top = e.pageY + 'px'
  mouse.style.left = e.pageX + 'px'
}

const activeCursor = (e) => {
  const item = e.target
  if (item.classList.contains('name') || item.classList.contains('nav-item')) {
    mouse.classList.add('active')
    mouseText.innerText = 'CLICK'
  } else {
    mouse.classList.remove('active')
    mouseText.innerText = ''
  }
}

window.addEventListener('mousemove', cursor)
window.addEventListener('mouseover', activeCursor)
