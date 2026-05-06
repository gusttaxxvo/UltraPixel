const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 20; // 20x20 blocos
let score = 0;

let snake = [];
snake[0] = {
  x: 10 * box,
  y: 10 * box
};

let direction = "right";

let food = {
  x: Math.floor(Math.random() * canvasSize) * box,
  y: Math.floor(Math.random() * canvasSize) * box
};

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
  else if (event.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (event.key === "ArrowRight" && direction !== "left") direction = "right";
  else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
});

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#0f0" : "#090";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x, food.y, box, box);

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "left") headX -= box;
  if (direction === "right") headX += box;
  if (direction === "up") headY -= box;
  if (direction === "down") headY += box;

  // Game Over: bateu na parede
  if (
    headX < 0 ||
    headY < 0 ||
    headX >= canvas.width ||
    headY >= canvas.height ||
    collision(headX, headY, snake)
  ) {
    clearInterval(game);
    alert("Game Over! Pontuação: " + score);
    location.reload();
    return;
  }

  let newHead = { x: headX, y: headY };

  // Comeu a comida
  if (headX === food.x && headY === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    food = {
      x: Math.floor(Math.random() * canvasSize) * box,
      y: Math.floor(Math.random() * canvasSize) * box
    };
  } else {
    snake.pop();
  }

  snake.unshift(newHead);
}

function collision(x, y, array) {
  for (let i = 0; i < array.length; i++) {
    if (x === array[i].x && y === array[i].y) {
      return true;
    }
  }
  return false;
}

const game = setInterval(draw, 100);
