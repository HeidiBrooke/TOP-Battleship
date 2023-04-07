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
    // if(val === 'E'){
    //     aNode.classList.add('empty')
    // }
    // else {
    //     aNode.textContent = val;
    // }
}
const getPlayer = (player, player2, turn) => {
    if(player.pNum === turn){
        return player;
    }
        return player2;
}
const getOtherPlayer = (player, player2, turn) => {
    if(player.pNum !== turn){
        return player;
    }
        return player2;
}

const checkForWin = (playerUp, playerNext) => {
    if(playerNext.allSunk()){
        // document.getElementById('messageBoard').textContent = `All of ${playerNext.pNum}'s ships are sunk. ${playerUp.pNum} wins!`;
        document.getElementById('messageBoard').textContent = `All of computer's ships are sunk. You win!`;
        const gridUnits = document.getElementsByClassName('unitl');
        const moregridUnits = document.getElementsByClassName('unitm');
        Array.from(gridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })  
        Array.from(moregridUnits).forEach(unit => {
            unit.replaceWith(unit.cloneNode(true));
        })
        const playAgain = document.getElementById('playAgain');
        playAgain.style.display = 'block';
        return true;
    }
    return false;
}
const renderWin = (player, player2) => {
const oldContainer = document.getElementById('container');
oldContainer.remove();
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard(player2, 'l');
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

}

const render = (player, player2) => {    
    document.getElementById('messageBoard').textContent = 'Your turn!';
const playerNum = Number(document.getElementById('turnBoard').textContent);
const oldContainer = document.getElementById('container');
oldContainer.remove();
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const log = drawBoard(player2, 'l');
log.id = 'log';
// const num = player.playerNum;
const mainBoard = drawBoard(player, 'm');
mainBoard.id = 'mainBoard';
container.appendChild(log);
container.appendChild(mainBoard);
log.children[3].textContent = 'Enemy Board';
mainBoard.children[3].textContent = 'My Board';
const units = document.getElementsByClassName('unitm');
Array.from(units).forEach(unit => {
    addStyles(unit, player);
})
const lunits = document.getElementsByClassName('unitl');
    Array.from(lunits).forEach(unit => {
        addStyles2(unit, player2);
    })
    const attack = (e) => {
        // console.log('attacking')
        
        const playerNum = Number(document.getElementById('turnBoard').textContent);
        const playerUp = getPlayer(player, player2, playerNum);
        const otherPlayer = getOtherPlayer(player, player2, playerNum);
        const aNode = e.target;
        const x = aNode.id.split('')[0];
        const y = Number(aNode.id.split('')[1]);
        // console.log([x,y])
        const valid = otherPlayer.receiveAttack([x,y]);
        if(!valid){
            console.log('no es valido')
            document.getElementById('messageBoard').textContent = 'Already guesed. Try again.';
            return
        }
        document.getElementById('turnBoard').textContent = otherPlayer.pNum;
        // setTimeout(() => {
        //     render(player, player2)  
        // }, '5000')
        console.log(checkForWin(playerUp, otherPlayer));
        if(!checkForWin(playerUp, otherPlayer)){
            render(player, player2) 
        } 
        else {renderWin(player, player2)}
    }
    const enableUserAttack = () => {
        Array.from(lunits).forEach(unit => {
            unit.addEventListener('mousedown', attack);
            
        })
    }

const attackComp = () => {
        
        // console.log('Computer attacking')
        const playerNum = Number(document.getElementById('turnBoard').textContent);
        const playerUp = getPlayer(player, player2, playerNum);
        const otherPlayer = getOtherPlayer(player, player2, playerNum);
        const x = alphas[Math.floor(Math.random() * 10)];
        const y = Math.floor(Math.random() * 10);
        // console.log([x,y])
        const valid = otherPlayer.receiveAttack([x,y]);
        // console.log(valid);
        if(!valid){
            attackComp()
            
        }
        document.getElementById('turnBoard').textContent = otherPlayer.pNum;
        console.log(checkForWin(playerUp, otherPlayer));
        if(!checkForWin(playerUp, otherPlayer)){
            render(player, player2) 
        }
        else {renderWin(player, player2)}

          
    }



enableUserAttack()


const disableUserAttack = () => {
    const gridUnits = document.getElementsByClassName('unitl');
    // console.log('cloning units to remove event listeners')
    Array.from(gridUnits).forEach(unit => {
        unit.replaceWith(unit.cloneNode(true));
    })
}

if(playerNum === 2){
    document.getElementById('messageBoard').textContent = 'Computer attacking!';
    disableUserAttack();
    setTimeout(() => {
        attackComp() 
    }, '1000')
    ;
}
else{enableUserAttack()}


}






   


// const miss = document.getElementById('a0l');
// miss.classList.add('miss')

// const hit = document.getElementById('a1l');
// hit.classList.add('hit');

export default render