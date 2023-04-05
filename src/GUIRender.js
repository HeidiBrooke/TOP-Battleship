import gameboard from "./gameboard";
import drawBoard from "./GUIBoard";
import drawShips from "./GUIShip";
import manualDrag from "./manualDrag";
import ship from "./ship";
import style from './style.css';

const alphas = "abcdefghij";
const alpha = alphas.split("");

const addStyles = (anNode, player) => {
    const aNode = anNode;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    const val = player.rows[x][y];
    if(val === 'M'){
        aNode.classList.add('miss')
    }
    if(val === 'H'){
        aNode.classList.add('hit')
    }
    if(val === 'E'){
        aNode.classList.add('empty')
    }
    else {
        aNode.textContent = val;
    }
}
const addStyles2 = (anNode, player) => {
    const aNode = anNode;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    const val = player.rows[x][y];
    if(val === 'M'){
        aNode.classList.add('miss')
    }
    if(val === 'H'){
        aNode.classList.add('hit')
    }
    if(val === 'E'){
        aNode.classList.add('empty')
    }
    else {
        aNode.textContent = val;
    }
}



const render = (player, player2) => {
const oldContainer = document.getElementById('container');
oldContainer.remove();
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard(null, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = drawBoard(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);

const units = document.getElementsByClassName('unitm');
Array.from(units).forEach(unit => {
    addStyles(unit, player);
})

const lunits = document.getElementsByClassName('unitl');
Array.from(lunits).forEach(unit => {
    addStyles2(unit, player2);
})

const messageBoard = document.createElement('div');
messageBoard.setAttribute('id', 'messageBoard');
container.appendChild(messageBoard);
messageBoard.textContent = player.pNum;
}


// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

export default render