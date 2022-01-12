function makeGrid(x=4, y=4) {
  const container = document.createElement('div');
  container.classList.toggle('grid');
  
  for(i = 0; i < y; i++) {
    for (j = 0; j < x; j++) {
      const div = document.createElement('div');
      div.classList.toggle('gridSquare');
      container.appendChild(div);
    }
  }
  
  const parent = document.querySelector('body');
  parent.appendChild(container);
  
}

makeGrid();


// ISSUES mouseenter and mouseleave not working properly 
const squares = document.querySelectorAll('.gridSquare');
squares.forEach(sq => sq.addEventListener('mouseenter', e => {
  sq.classList.toggle('hovered');
  console.log("hovered");
}));
squares.forEach(sq => sq.addEventListener('mouseleave', e => {
  sq.classList.toggle('hovered');
  console.log("hovered");
}));


