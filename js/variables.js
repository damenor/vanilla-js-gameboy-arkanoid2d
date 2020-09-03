/************************************************ DOM ************************************************/

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// const gamepadTop = document.getElementById('gamepad-top')
// const gamepadRight = document.getElementById('gamepad-right')
// const gamepadBottom = document.getElementById('gamepad-bottom')
// const gamepadLeft = document.getElementById('gamepad-left')

// gamepadRight.addEventListener('mousedown', (e) => {
//   pressedRight = true
//   console.log('mousedown', pressedRight)
// }, false)

// gamepadRight.addEventListener('mouseup', (e) => {
//   pressedRight = false
//   console.log('mouseup', pressedRight)
// }, false)

// gamepadLeft.addEventListener('mousedown', (e) => {
//   pressedLeft = true
//   console.log('mousedown', pressedLeft)
// }, false)

// gamepadLeft.addEventListener('mouseup', (e) => {
//   pressedLeft = false
//   console.log('mouseup', pressedLeft)
// }, false)

/************************************************ GAME ************************************************/

const colorPrimary = '#444'
const textFont = '20px "Courier New", Courier, monospace'

let score = 0
let lives = 3
let isStart = true

let level = 1
let levelRow = 2
let levelSpeed = 2

/************************************************ BALL ************************************************/

const ballRadius = 10

/************************************************ BRICKS ************************************************/

const brickRowCount = level * levelRow
const brickColumnCount = 5
const brickWidth = 50
const brickHeight = 16
const brickPadding = 8
var brickOffsetTop = 50
var brickOffsetLeft = 8

var bricks = []
for(c = 0; c < brickColumnCount; c++) {
  bricks[c] = []
  for(r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 }
  }
}

/************************************************ PADDLE ************************************************/

const paddleHeight = 10
const paddleWidth = 75
let paddleX = (canvas.width - paddleWidth) / 2

/************************************************ DIRECTION ************************************************/

let x = canvas.width / 2
let y = canvas.height - 30

let dx = levelSpeed
let dy = -levelSpeed

let pressedRight = false
let pressedLeft = false
