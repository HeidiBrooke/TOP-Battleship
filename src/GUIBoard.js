const alphas = "abcdefghij";
const alpha = alphas.split("");

function addHover(ev) {
    ev.target.classList.add('hovered');
}
function unHover(ev) {
    ev.target.classList.remove('hovered');
}

function unstyleTarget(ev) {
    ev.preventDefault();
    ev.target.classList.remove('draghover');
  }

function styleTarget(ev) {
    ev.preventDefault();
    ev.target.classList.add('draghover');
  }

function getlocation(ev) {
    ev.preventDefault();
    unstyleTarget(ev);
    const data = document.getElementsByClassName('dragItem');
    const node = data[0];
    let loc = ev.target.id;
    console.log(loc)
    console.log(node)
    loc = loc.split('');
     const col1 = Number(loc[1]);
     const col2 = col1 + 1;
     const row1 = alpha.indexOf(loc[0]) + 2;
     const row2 = row1 + 1
     node.style.gridArea = `${row1}/${col1}/${row2}/${col2}`; 
     ev.target.parentElement.parentElement.appendChild(node);
  }

const drawBoard = (plyrVal, type) => {
    const grid = document.createElement('div');
    grid.classList.add('board');
    const topLabel = document.createElement('div');
    grid.appendChild(topLabel);
    topLabel.classList.add('topLabel');
    const sideLabel = document.createElement('div');
    grid.appendChild(sideLabel);
    sideLabel.classList.add('sideLabel');
    const innerBoard = document.createElement('div');
    innerBoard.classList.add('innerBoard');
    grid.appendChild(innerBoard);
    // grid.setAttribute('ondragover', allowDrop);
    // grid.setAttribute('ondrop',drop);

    for(let i = 0; i < 10;){
        const div = document.createElement('div');
        div.id = `${i}l`
        div.classList.add('tlUnit');
        topLabel.appendChild(div);
        div.textContent = `${i + 1}`
        i+=1;
    }

    for(let i = 0; i < 10;){
        const div = document.createElement('div');
        div.id = `${i}l`
        div.classList.add('slUnit');
        sideLabel.appendChild(div);
        div.textContent = `${alpha[i]}`
        i+=1;
    }

    for(let i = 0; i < 10;){
        for(let j= 0; j < 10;){
            const div = document.createElement('div');
            div.classList.add(`unit${type}`);
            innerBoard.appendChild(div);
            div.id = `${alpha[i]}${j}${type}`;
            div.addEventListener('dragover', styleTarget);
            // div.addEventListener('dragenter', styleTarget);
            div.addEventListener('dragleave', unstyleTarget);
            div.addEventListener('drop', getlocation);
            j+=1;
        }
        i+=1;
    }

    const corner = document.createElement('div');
    grid.appendChild(corner);
    corner.classList.add('corner');

    
    
    
    return grid;
}

export default drawBoard