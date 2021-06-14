const pixels = document.getElementsByTagName('td');
const eraseBtn = document.getElementById('clear-board');
const boardInput = document.getElementById('board-size');
const boardBtn = document.getElementById('generate-board');

function turnBlackSelected() {
  const colorPalette1 = document.getElementById('color-palette');
  colorPalette1.firstElementChild.classList.add('selected');
}

function turnSelectedColor(event) {
  const selectedList = document.getElementsByClassName('selected')[0];
  if (event.target.classList.contains('selected')) {
    // empty
  } else {
    selectedList.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const colorPalette = document.getElementById('color-palette');
const cores = ['black', randomColor(), randomColor(), randomColor()];
for (let index = 0; index < 4; index += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = cores[index];
  div.addEventListener('click', turnSelectedColor);
  colorPalette.appendChild(div);
}

function removeLastBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  while (pixelBoard.children[0]) {
    pixelBoard.removeChild(pixelBoard.lastElementChild);
  }
}

function turnSameColor(event) {
  const clickedPixel = event.target;
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (clickedPixel.style.backgroundColor !== selectedColor.style.backgroundColor) {
    clickedPixel.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  if (boardInput.value === '') {
    alert('Board inválido!');
  }
  removeLastBoard();
  for (let index = 0; index < boardInput.value; index += 1) {
    const tRow = document.createElement('tr');
    pixelBoard.appendChild(tRow);
    for (let index2 = 0; index2 < boardInput.value; index2 += 1) {
      const tDiv = document.createElement('td');
      tDiv.className = 'pixel';
      tDiv.style.backgroundColor = 'white';
      tDiv.addEventListener('click', turnSameColor);
      pixelBoard.children[index].appendChild(tDiv);
    }
  }
  boardInput.value = '';
}

function eraserBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function maxMinValue() {
  if (boardInput.value < 5 && boardInput.value !== '') {
    boardInput.value = 5;
  } else if (boardInput.value > 50) {
    boardInput.value = 50;
  }
}

eraseBtn.addEventListener('click', eraserBoard);
boardBtn.addEventListener('click', maxMinValue);
boardBtn.addEventListener('click', createPixelBoard);

function onLoadSite() {
  turnBlackSelected();
  createPixelBoard();
}

window.onload = onLoadSite;
