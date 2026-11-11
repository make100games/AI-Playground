const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const SPEED = 240; // pixels per second
const square = {
  size: 40,
  x: (canvas.width - 40) / 2,
  y: (canvas.height - 40) / 2,
};

const keys = new Set();
const ARROWS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

window.addEventListener('keydown', (e) => {
  if (ARROWS.includes(e.key)) {
    keys.add(e.key);
    e.preventDefault(); // stop the page from scrolling
  }
});
window.addEventListener('keyup', (e) => keys.delete(e.key));
window.addEventListener('blur', () => keys.clear());

function update(dt) {
  let dx = 0;
  let dy = 0;
  if (keys.has('ArrowLeft')) dx -= 1;
  if (keys.has('ArrowRight')) dx += 1;
  if (keys.has('ArrowUp')) dy -= 1;
  if (keys.has('ArrowDown')) dy += 1;

  square.x += dx * SPEED * dt;
  square.y += dy * SPEED * dt;

  // Keep the square inside the canvas.
  square.x = Math.max(0, Math.min(canvas.width - square.size, square.x));
  square.y = Math.max(0, Math.min(canvas.height - square.size, square.y));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4fc3f7';
  ctx.fillRect(square.x, square.y, square.size, square.size);
}

let last = performance.now();
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
