function collisionDetection() {
  for(c = 0; c < brickColumnCount; c++) {
    for(r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r]
      if(brick.status === 1 && x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
        dy = -dy
        brick.status = 0
        score++
        if(score == brickRowCount*brickColumnCount) {
          isStart = false
          alert("YOU WIN, CONGRATULATIONS!")
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI*2)
  ctx.fillStyle = colorPrimary
  ctx.fill()
  ctx.closePath()
}

function drawBricks() {
  for(c = 0; c < brickColumnCount; c++) {
    for(r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop
        bricks[c][r].x = brickX
        bricks[c][r].y = brickY
        ctx.beginPath()
        ctx.rect(brickX, brickY, brickWidth, brickHeight)
        ctx.fillStyle = colorPrimary
        ctx.fill()
        ctx.closePath()
      }
    }
  }
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = colorPrimary
  ctx.fill()
  ctx.closePath()
}

function drawScore() {
  ctx.font = textFont
  ctx.fillStyle = colorPrimary
  ctx.fillText(`Score: ${score}`, 8, 28);
}

function drawLives() {
  ctx.font = textFont
  ctx.fillStyle = colorPrimary
  ctx.fillText(`Lives: ${lives}`, canvas.width - 105, 28)
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBricks()
  drawBall()
  drawPaddle()
  drawScore()
  collisionDetection()
  drawLives()

  if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx
  if(y + dy < ballRadius) {
    dy = -dy
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy
    } else {
      lives--
      if (!lives) {
        isStart = false
        alert('GAME OVER')
      } else {
        x = canvas.width / 2
        y = canvas.height - 30
        dx = levelSpeed
        dy = -levelSpeed
        paddleX = (canvas.width - paddleWidth) / 2
      }
    }
  }

  if(pressedLeft && paddleX > 0) paddleX -=7
  if(pressedRight && paddleX < canvas.width-paddleWidth) paddleX +=7

  x += dx
  y += dy

  if (isStart) requestAnimationFrame(draw)

}
