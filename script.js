// window.onload = {}

const colorPalette = document.getElementById('color-palette');
console.log(colorPalette);

const cores = ['red', 'yellow', 'blue', 'black'];
for (let index = 0; index < 4; index += 1) {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = cores[index];
  colorPalette.appendChild(div);
}
