import drawLayout from "./GUIMain";
import gameboard from "./gameboard";
import render from "./GUIRender";
import ship from "./ship";

const alphas = "abcdefghij";
const alpha = alphas.split("");

const printShips = (shipsArray) => {
    shipsArray.forEach(shipEl => {
      console.log(shipEl.name)
      console.log(shipEl.coords)
    })
  }

// const player = (num) => {
//     const playerNum = num;
//     const pGameboard = gameboard(10);
//     return {playerNum, pGameboard}
// };
// const player1 = player(1);
const replay = () => {
    Array.from(document.body.children).forEach(el => {
        el.remove();
    })
    initialDraw();
}

const initialDraw = () => {
    const turnBoard = document.createElement('div');
    turnBoard.setAttribute('id', 'turnBoard');
    turnBoard.textContent = '1';
    document.body.appendChild(turnBoard);
    const title = document.createElement('div');
    title.classList.add('title');
    document.body.appendChild(title);
    title.textContent = 'BATTLESHOOP';
    const messageBoard = document.createElement('div');
    messageBoard.setAttribute('id', 'messageBoard');
    messageBoard.textContent = 'Place your ships. Press R key to rotate. When finished lock your ships in to begin the game.';
    document.body.appendChild(messageBoard);
    const playAgain = document.createElement('div');
            document.body.appendChild(playAgain);
            playAgain.classList.add('button');
            playAgain.setAttribute('id', 'playAgain');
            playAgain.textContent = 'PLAY AGAIN';
            playAgain.addEventListener('mousedown', replay);
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container)



const player1 = gameboard(10, 1);
const computer = gameboard(10, 2);


const nameShip = (l) => {
    if (l === 5){
      return 'carrier';
    }
    if (l === 4){
      return 'battleship';
    }
    if (l === 3){
      return 'cruiser';
    }
    if (l === 2){
      return 'destroyer';
    }
    return 'error'
  }
const genRandomCoord = () => {
    const x = alphas[Math.floor(Math.random() * 10)];
    const y = Math.floor(Math.random() * 9);
    return [x,y];
}
const genRandomDir = () => {
    let dir = Math.floor(Math.random() * 2);
    if(dir === 1){
        dir = 'd'
    }
    else{
        dir = 'r'
    }
    return dir;
}

const placeCompShip = (l) => {
    const coord = genRandomCoord();
    const dir = genRandomDir();
    const valid = computer.placeShip(l, coord, dir, nameShip(l), true)
    console.log(valid);
    console.log(l, coord, dir, nameShip(l))
    if(!valid){
        placeCompShip(l);
    }
}


    placeCompShip(5)
    placeCompShip(4)
    placeCompShip(3)
    placeCompShip(3)
    placeCompShip(2)

       
    

printShips(computer.ships);
drawLayout(player1, computer);

}

initialDraw()







//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);



