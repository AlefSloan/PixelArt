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

const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 5; index += 1) {
  const tRow = document.createElement('tr');
  pixelBoard.appendChild(tRow);
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const tDiv = document.createElement('td');
    tDiv.className = 'pixel';
    pixelBoard.children[index].appendChild(tDiv);
  }
}
