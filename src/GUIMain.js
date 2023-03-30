import gameboard from "./gameboard";
import drawBoard from "./GUIBoard";
import drawShips from "./GUIShip";
import manualDrag from "./manualDrag";
import ship from "./ship";
import style from './style.css';

const alphas = "abcdefghij";
const alpha = alphas.split("");

const drawLayout = (player) => {
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
const ships = drawShips();

const shipHolder = document.createElement('div');
shipHolder.classList.add('shipHolder');
container.appendChild(shipHolder);

ships.forEach(shipEl => {
    const shipHold = document.createElement('div');
    shipHold.classList.add('shipHold')
    shipHold.appendChild(shipEl);
    shipHold.style.width = shipEl.firstChild.style.width;
    shipHolder.appendChild(shipHold);
    manualDrag(shipEl, player);
})
const sub = document.querySelectorAll('[data-name="cruiser"]');
sub[0].setAttribute('data-name', 'submarine');


const playerPlace = (col1, row1, length, rot, aPlayer, name) => {
    const n = name;
    const col = col1 - 1;
    const row = alpha[row1 - 2];
    const coord = [row, col];
    const len = length;
    const isRotated = rot;
    let dir = 'r';
    if(isRotated){
        dir = 'd'
    }
    const valid = aPlayer.placeShip(len,coord,dir,n);
    return valid;
}

function rotate(ev){
    if(ev.key === 'r'){
        console.log('rotating');
        // if parent node is shiphold do, normal, other wise, get start coord
        // build a ship in opposite direction (horizontal or vertical), basically treat as a drop if it's already of the board.
        // if ship is valid overwrite
        const selected = document.getElementsByClassName('selected')[0].parentElement;
        let currentRotation = selected.style.transform;
        if((currentRotation === '')||(currentRotation === 'rotate(0deg)') ){
            currentRotation = 0;
            selected.style.transform = `rotate(90deg)`;
            selected.setAttribute('data-rotated', 'true');
        }
        else{
            currentRotation = currentRotation.split('');
            let newRotation = currentRotation[7] + currentRotation[8];
            newRotation = Number(newRotation);
            newRotation -= 90;
            console.log(newRotation)
            selected.style.transform = `rotate(${newRotation}deg)`;
            selected.setAttribute('data-rotated', 'true');
        }
        console.log(selected);
        if(selected.parentElement.getAttribute('class') === 'board'){
            const isRotated = selected.dataset.rotated;
            const length = Number(selected.dataset.ship);
                const gArea = selected.style.gridArea.split('');
                const col1 = Number(gArea[4]);
                console.log(col1);
                const row1 = Number(gArea[0]);
                console.log(row1);
                
                playerPlace(col1, row1, length, isRotated, player, selected.dataset.name) 

        }
    }  
}
document.addEventListener('keydown', rotate)

}

// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

export default drawLayout