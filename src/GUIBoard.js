const drawBoard = (plyrVal, type) => {
    const alphas = "abcdefghij";
    const alpha = alphas.split("");
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