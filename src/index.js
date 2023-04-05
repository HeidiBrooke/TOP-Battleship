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
const units = document.getElementsByClassName('unitl');


const getOtherplayer = (aPlayer) => {
    players.forEach(plyr => {
        if(plyr !== aPlayer){
            console.log(plyr)
            return plyr;
        }
    })
}
const attack = (e) => {
    console.log('attacing')
    const playerNum = Number(document.getElementById('messageBoard').textContent);
    const playerUp = players[playerNum];
    const otherPlayer = getOtherplayer(playerUp);
    const aNode = e.target;
    const x = alpha.indexOf(aNode.id.split('')[0]);
    const y = aNode.id.split('')[1];
    otherPlayer.receiveAttack([x,y])
    render(playerUp, otherPlayer);
}
Array.from(units).forEach(unit => {
    unit.addEventListener('mousedown', attack);
})

//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);



