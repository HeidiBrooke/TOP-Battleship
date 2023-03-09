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

const miss = document.getElementById('a0l');
miss.classList.add('miss')

const hit = document.getElementById('a1l');
hit.classList.add('hit');


const shipdivs  = [];
for(let i =0; i <5;){
    shipdivs.push(document.getElementById(`b${i}m`));
    i+=1;
}
shipdivs.forEach(divEl => {
    divEl.classList.add('ship')
})

