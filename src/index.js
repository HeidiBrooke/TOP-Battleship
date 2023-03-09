import drawLog from "./GUILog";
import style from './style.css';

console.log('rendering!')
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
container.appendChild(drawLog());
