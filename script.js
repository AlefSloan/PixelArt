// window.onload = {}

const colorPalette = document.getElementById('color-palette');
console.log(colorPalette);

const cores = ['black', 'yellow', 'blue', 'red'];
for (let index = 0; index < 4; index += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = cores[index];
  colorPalette.appendChild(div);
}

const pixelBoard = document.getElementById('pixel-board')
for(let index = 0; index < 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  pixelBoard.appendChild(div);
}
