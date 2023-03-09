import drawBoard from "./GUIBoard";
import ship from "./ship";
import style from './style.css';

const alphas = "abcdefghij";
const alpha = alphas.split("");

console.log('rendering!')
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard(null, 'l');
log.id = 'log';
const mainBoard = drawBoard(null, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);





const holder = document.createElement('div');
holder.classList.add('unitl');
holder.classList.add('holder');
// holder.addEventListener('dragover', allowDrop);
// holder.addEventListener('drop', getlocation);
container.appendChild(holder)

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.classList.add('dragItem');
  }
function place(){

}
const fakeship = document.createElement('div');
fakeship.classList.add('ship');
fakeship.setAttribute('draggable', 'true');
fakeship.addEventListener('dragstart', drag);
fakeship.addEventListener('dragend', place)
container.appendChild(fakeship);

// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');


// const shipdivs  = [];
// for(let i =0; i <5;){
//     shipdivs.push(document.getElementById(`b${i}m`));
//     i+=1;
// }
// shipdivs.forEach(divEl => {
//     divEl.classList.add('ship')
// })



