import drawLayout from "./GUIMain";
import gameboard from "./gameboard";
import render from "./GUIRender";

const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      console.log(shipEl.name)
    })
  }



// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);
const turnBoard = document.createElement('div');
turnBoard.setAttribute('id', 'turnBoard');
turnBoard.textContent = '1';
document.body.appendChild(turnBoard);
const messageBoard = document.createElement('div');
messageBoard.setAttribute('id', 'messageBoard');
messageBoard.textContent = 'place your ships. Press R key to rotate. when finished lock your ships in to begin the game.';
document.body.appendChild(messageBoard);
const player1 = gameboard(10, 1);
const computer = gameboard(10, 2);
const players = [player1, computer];
computer.placeShip(5, ['a',0], 'r', 'carrier')
computer.placeShip(4, ['b',1], 'r', 'battleship')
computer.placeShip(3, ['c',1], 'r', 'submarine')
computer.placeShip(3, ['d',1], 'r', 'cruiser')
computer.placeShip(2, ['e',2], 'r', 'destroyer')
printShips(computer.ships);
drawLayout(player1, computer);








//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);



