// Tim rơi
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 20 + 10;
  this.speedY = Math.random() * 1 + 0.5;
  this.opacity = Math.random() * 0.5 + 0.5;
  this.color = `rgba(255,105,180,${this.opacity})`;
}

Heart.prototype.update = function () {
  this.y += this.speedY;
  if (this.y > canvas.height) {
    this.y = -this.size;
    this.x = Math.random() * canvas.width;
  }
};

Heart.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size / 2,
                    this.x + this.size, this.y + this.size / 3,
                    this.x, this.y + this.size);
  ctx.bezierCurveTo(this.x - this.size, this.y + this.size / 3,
                    this.x - this.size / 2, this.y - this.size / 2,
                    this.x, this.y);
  ctx.fill();
};

function initHearts() {
  hearts = [];
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

initHearts();
animate();

// Popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
