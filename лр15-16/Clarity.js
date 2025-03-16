// Получаем доступ к холсту и контексту
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Класс игрока
class Player {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speed = 4;
    this.score = 0;
  }

  // Отрисовка игрока
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  // Перемещение игрока
  move(dx, dy) {
    this.x += dx * this.speed;
    this.y += dy * this.speed;
    this.x = Math.max(0, Math.min(canvas.width - this.size, this.x));
    this.y = Math.max(0, Math.min(canvas.height - this.size, this.y));
  }

  // Проверка столкновений с монетами
  checkCollisionWithCoin(coin) {
    return (
      this.x < coin.x + coin.size &&
      this.x + this.size > coin.x &&
      this.y < coin.y + coin.size &&
      this.y + this.size > coin.y
    );
  }
}

// Класс для монет
class Coin {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  // Отрисовка монеты
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

// Класс препятствия
class Obstacle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Отрисовка препятствия
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Проверка столкновений с игроком
  checkCollisionWithPlayer(player) {
    return (
      player.x < this.x + this.width &&
      player.x + player.size > this.x &&
      player.y < this.y + this.height &&
      player.y + player.size > this.y
    );
  }
}

// Инициализация объектов
const player = new Player(50, 50, 20, 'blue');
const obstacles = [
  new Obstacle(300, 100, 50, 300, 'red'),
  new Obstacle(500, 200, 50, 300, 'red')
];
const coins = [
  new Coin(150, 150, 20, 'yellow'),
  new Coin(400, 400, 20, 'yellow'),
  new Coin(600, 300, 20, 'yellow')
];

// Управление движением игрока
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

window.addEventListener('keydown', (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

// Основной игровой цикл
function gameLoop() {
  // Очищаем экран
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Обновление позиции игрока
  if (keys.ArrowUp) player.move(0, -1);
  if (keys.ArrowDown) player.move(0, 1);
  if (keys.ArrowLeft) player.move(-1, 0);
  if (keys.ArrowRight) player.move(1, 0);

  // Проверка столкновений с монетами
  for (let i = 0; i < coins.length; i++) {
    if (player.checkCollisionWithCoin(coins[i])) {
      coins.splice(i, 1);
      player.score += 1;
      i--;
    }
  }

  // Проверка столкновений с препятствиями
  for (const obstacle of obstacles) {
    if (obstacle.checkCollisionWithPlayer(player)) {
      alert('Game Over! Final Score: ' + player.score);
      document.location.reload();
    }
  }

  // Отрисовка объектов
  player.draw();
  for (const coin of coins) coin.draw();
  for (const obstacle of obstacles) obstacle.draw();

  // Проверка завершения игры
  if (coins.length === 0) {
    alert('You Win! Final Score: ' + player.score);
    document.location.reload();
  }

  // Запуск следующего кадра
  requestAnimationFrame(gameLoop);
}

// Запуск игры
gameLoop();
