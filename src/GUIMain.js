import drawBoard from "./GUIBoard";
import drawShips from "./GUIShip";
import manualDrag from "./manualDrag";
import ship from "./ship";
import style from './style.css';

const drawLayout = () => {
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard(null, 'l');
log.id = 'log';
const mainBoard = drawBoard(null, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
const ships = drawShips();
const shipHolder = document.createElement('div');
shipHolder.classList.add('shipHolder');
container.appendChild(shipHolder);
ships.forEach(shipEl => {
    shipHolder.appendChild(shipEl);
     manualDrag(shipEl);
})
}

// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

export default drawLayout