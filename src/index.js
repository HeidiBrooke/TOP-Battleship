import drawBoard from "./GUIBoard";
import style from './style.css';

console.log('rendering!')
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard();
log.id = 'log';
const mainBoard = drawBoard();
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
