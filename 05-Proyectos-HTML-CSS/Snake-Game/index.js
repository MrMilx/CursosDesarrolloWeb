const canvas = document.querySelector(".gameCanvas");
const ctx = canvas.getContent("2d");
const scoreBlock = document.querySelector(".score");

const snake = {
  x: 10,
  y: 10,
  dx: 0,
  dy: 0,
  cells: [{ x: 10, y: 10 }],
  maxCells: 4,
  score: 0,
};

const food = {
  x: 0,
  y: 0,
};

function getRamdonInt(min, max) {
  return math.floor(math.ramdon() * (max - min + 1)) + min;
}

function update() {}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";

  snake.cells.forEach((cells, index) => {
    ctx.fillRect(cell.x, cell.y, 10, 10);

    if (cells.x === food.x && cell.y === food.y) {
      snake.maxCells++;
      food.x = getRamdonInt(0, canvas.width / 10 - 1) * 10;
      food.y = getRamdonInt(0, canvas.height / 10 - 1) * 10;
    }
  });

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);
}

function gameLoop() {
  update();
  draw();
  setTimeout(gameLoop, 30);
}

document.addEventListener("click", () => {
  switch (e.key) {
    case "arrowUp":
      if(snake)
  }
});

gameLoop();
