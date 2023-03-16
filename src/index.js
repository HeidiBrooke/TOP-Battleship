import drawLayout from "./GUIMain";
import gameboard from "./gameboard";

const alphas = "abcdefghij";
const alpha = alphas.split("");

const player1 = gameboard(10);
const computer = gameboard(10);
drawLayout(player1);

//when a ship is changed (r) or picked up and moved
//AND new position is valid
//delete old ship, run new ship



// document.addEventListener("dropship", playerPlace);



