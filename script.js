const pixels = document.getElementsByTagName('td');
const eraseBtn = document.getElementById('clear-board');
const boardInput = document.getElementById('board-size');
const boardBtn = document.getElementById('generate-board');
const paletteInput = document.getElementById('palette-size');
const paletteBtn = document.getElementById('generate-palette');

function turnSelectedColor(event) {
  const selectedList = document.getElementsByClassName('selected')[0];
  if (!event.target.classList.contains('selected')) {
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

function createPaletteColors() {
  if (paletteInput.value === '' || paletteInput.value > 35) {
    alert('Palette inválido!');
    return
  }
  removeLastPalette()
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < paletteInput.value; index += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    if (index === 0 && !(colorPalette.firstChild)) {
      div.style.backgroundColor = 'black'
      div.classList.add('selected');
    } else {
      div.style.backgroundColor = randomColor();
    }
    div.addEventListener('click', turnSelectedColor);
    colorPalette.appendChild(div);
  }
  paletteInput.value = '';
}

function removeLastPalette() {
  const colorPalette = document.getElementById('color-palette');
  while (colorPalette.children[0]) {
    colorPalette.removeChild(colorPalette.lastElementChild);
  }
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
    return
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
paletteBtn.addEventListener('click', createPaletteColors);

function onLoadSite() {
  createPixelBoard();
  createPaletteColors();
}

window.onload = onLoadSite;
