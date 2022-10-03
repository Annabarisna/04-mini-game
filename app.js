const board = document.querySelector('#board');
const colors = ['#006666', '#2d572c', '#a98307', '#e8793e', '#d95030', '#8f509d', '#abcdef'];
const SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () =>
    setColor(square));
    square.addEventListener('mouseleave', () =>
    remuveColor(square));
    board.append(square)
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remuveColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor (){
   const index = Math.floor(Math.random() * colors.length) 
   return colors[index]
}
