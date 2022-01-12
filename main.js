makeGrid();

function makeGrid(gridSize=32) {

  // Check for an old grid and delete it if there is one
  const oldGrid = document.getElementById('grid');
  if (oldGrid != null) {
    oldGrid.remove();
  }

  // Create a container for the grid
  const container = document.createElement('div');
  container.setAttribute('id', 'grid');
  
  // Size the grid
  const squareWidth = ((100 / gridSize) - 1) + '%';
  const squareHeight = (100 / gridSize) + '%';

  // Make the grid
  for(i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      const div = document.createElement('div');
      div.classList.add('gridSquare');

      div.style.width = squareWidth;
      div.style.height = squareHeight;
  
      container.appendChild(div);
    }
  }

  // Send to HTML
  const parent = document.querySelector('body');
  parent.appendChild(container);

  //Initate Hover
  onHover();

}

function onHover() {
  const squares = document.querySelectorAll('.gridSquare');
  squares.forEach(sq => sq.addEventListener('mouseenter', e => {
    sq.classList.add('hovered');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    sq.style.cssText += 'background-color:' + '#' + randomColor;
  }));
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', e => {
  const squares = document.querySelectorAll('.gridSquare');
  squares.forEach(sq => sq.classList.remove('hovered'));
  let gridSize = -1;
  while (gridSize < 0 || gridSize > 65) {
    gridSize = prompt("How many squares per side of grid? (Default is 4)");
  }
  makeGrid(gridSize);
});



// squares.forEach(sq => sq.addEventListener('mouseleave', e => {
//   sq.classList.toggle('hovered');
//   console.log("hovered");
// }));


