function turnBlackSelected() {
  const colorPalette1 = document.getElementById('color-palette');
  colorPalette1.firstElementChild.classList.add('selected');
}

window.onload = turnBlackSelected;

const colorPalette = document.getElementById('color-palette');
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
    tDiv.style.backgroundColor = 'white';
    pixelBoard.children[index].appendChild(tDiv);
  }
}

const colors = document.getElementsByClassName('color');
const colorBlack = colors[0];
const colorYellow = colors[1];
const colorBlue = colors[2];
const colorRed = colors[3];

function turnSelectedBlack(event) {
  if (event.target.classList.contains('selected') === true) {
    // empty
  } if (event.target.classList.contains('selected') === false) {
    colorYellow.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlack.classList.add('selected');
  }
}

function turnSelectedBlue(event) {
  if (event.target.classList.contains('selected') === true) {
    // empty
  } if (event.target.classList.contains('selected') === false) {
    colorBlack.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlue.classList.add('selected');
  }
}

function turnSelectedRed(event) {
  if (event.target.classList.contains('selected') === true) {
    // empty
  } if (event.target.classList.contains('selected') === false) {
    colorBlack.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorRed.classList.add('selected');
  }
}

function turnSelectedYellow(event) {
  if (event.target.classList.contains('selected') === true) {
    // empty
  } if (event.target.classList.contains('selected') === false) {
    colorBlack.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorYellow.classList.add('selected');
  }
}

colorBlack.addEventListener('click', turnSelectedBlack);
colorRed.addEventListener('click', turnSelectedRed);
colorYellow.addEventListener('click', turnSelectedYellow);
colorBlue.addEventListener('click', turnSelectedBlue);

const pixels = document.getElementsByTagName('td');

function turnSameColor(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  if (event.target.style.backgroundColor !== selectedColor.style.backgroundColor) {
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', turnSameColor);
}

function eraserBoard(event) {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', eraserBoard);
