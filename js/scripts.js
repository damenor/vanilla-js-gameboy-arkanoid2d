const gameboyControlHorizontalLeft = document.querySelector('.gameboy__controls-direction-horizontal-left')
const gameboyControlHorizontalRight = document.querySelector('.gameboy__controls-direction-horizontal-right')

function onPressDownLeft(e) {
  pressedLeft = true
  console.log('left', pressedLeft)
}
function onPressUpLeft(e) {
  pressedLeft = false
  console.log('left', pressedLeft)
}

function onPressDownRight(e) {
  pressedRight = true
  console.log('right', pressedRight)
}
function onPressUpRight(e) {
  pressedRight = false
  console.log('right', pressedRight)
}

gameboyControlHorizontalLeft.addEventListener('touchstart', onPressDownLeft, false)
gameboyControlHorizontalLeft.addEventListener('touchend', onPressUpLeft, false)
gameboyControlHorizontalLeft.addEventListener('mousedown', onPressDownLeft, false)
gameboyControlHorizontalLeft.addEventListener('mouseup', onPressUpLeft, false)

gameboyControlHorizontalRight.addEventListener('touchstart', onPressDownRight, false)
gameboyControlHorizontalRight.addEventListener('touchend', onPressUpRight, false)
gameboyControlHorizontalRight.addEventListener('mousedown', onPressDownRight, false)
gameboyControlHorizontalRight.addEventListener('mouseup', onPressUpRight, false)

draw()