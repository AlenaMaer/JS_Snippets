const board = document.querySelector('#board');
const colors = ['#f2d3bc', '#bcf2d3', '#d3bcf2', '#bcf2ee', '#f2bcc0','#c1bcf2','#edf2bc'];
const SQUARES_NUMBER = 600;

for(let i=0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);
}

function setColor(element){
    const color = randColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 3px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function randColor(){
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
}