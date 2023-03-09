import gameboard from "./gameboard";

const player = (string, ptype = "person") => {
    const alphas = "abcdefghij";
    const alpha = alphas.split("");
    const type = ptype;
    const name = string;
    const board = gameboard(10);
    if(type === 'comp'){
        const generateRandomCoord = () => {
            let x = Math.floor(Math.random()*10) - 1;
            const y = Math.floor(Math.random()*10) - 1;
            x = alpha[x];
            return [x, y];
        }
        return {name, board, type, generateRandomCoord}
    }

    return{name, board, type}
}

export default player