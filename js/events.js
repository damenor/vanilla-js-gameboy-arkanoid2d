document.addEventListener('keydown', (e) => handleKey(e.keyCode, true), false)
document.addEventListener('keyup', (e) => handleKey(e.keyCode, false), false)
// document.addEventListener('mousemove', handleMouseMove, false)

function handleKey(keyCode, status) {
  if (keyCode === 37) pressedLeft = status
  if (keyCode === 39) pressedRight = status
}

function handleMouseMove(e) {
  const relativeX = e.clientX - canvas.offsetLeft
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2
  }
}


function getWindowSize() {
  let width = 0
  let height = 0
  if (typeof (window.innerWidth) === 'number') {
    width = window.innerWidth
    height = window.innerHeight
  } else {
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      width = document.documentElement.clientWidth
      height = document.documentElement.clientHeight
    } else {
      if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        width = document.body.clientWidth
        height = document.body.clientHeight
      }
    }
  }
  return { width, height }
}