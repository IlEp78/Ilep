const towers = document.querySelectorAll('.tower');
const startBtn = document.getElementById('startBtn');
const hintBtn = document.getElementById('hintBtn');
const message = document.getElementById('message');
const disksCountInput = document.getElementById('disksCount');

let disks = [];
let currentTower = 0;
let movesCount = 0;

function createDisks(count) {
  disks = [];
  for (let i = count; i > 0; i--) {
    const disk = document.createElement('div');
    disk.classList.add('disk');
    disk.dataset.size = i;
    disk.style.width = `${i * 20}px`;
    disk.style.height = `${i * 20}px`;
    disks.push(disk);
  }
}

function placeDisks(towerId, count) {
  const tower = towers[towerId];
  for (let i = count - 1; i >= 0; i--) {
    tower.appendChild(disks[i]);
  }
}

function startGame() {
  const count = parseInt(disksCountInput.value);
  if (count < 1) {
    message.textContent = 'Неверное количество дисков';
    return;
  }

  createDisks(count);
  placeDisks(0, count);
  currentTower = 0;
  movesCount = 0;
  message.textContent = '';
  startBtn.disabled = true;
  hintBtn.disabled = false;
}

function moveDisk(fromTower, toTower) {
  if (disks.length === 0) return;
}
  const disk = disks.pop();
  const fromTowerElement = towers[fromTower];

