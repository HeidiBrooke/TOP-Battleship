function validEntry(length, startPoint, direction, alpha){
    if(direction == 'r'){
        if ((startPoint[1] + length-1) > 9){
            return false;
        }
    }
    if(direction == 'u'){
        if((alpha.indexOf(startPoint[0])- length-1) < 0){
            return false;
        }
    }
    if(direction == 'd'){
        if((alpha.indexOf(startPoint[0]) + length-1) > 9){
            return false;
        }
    }
    if(direction == 'l'){
        if((startPoint[1]- length) < 0){
            return false;
        }
    }

    return true;
}

function right(length, startPoint){
    let array = [];
    for(let i = 0; i < length; i++){
        let x;
        let y;
        x = (startPoint[0]);
        y = startPoint[1];
        startPoint[1]++;
        array.push([x,y]);
    }
    return array;
}

function left(length, startPoint){
    let array = [];
    for(let i = 0; i < length; i++){
        let x;
        let y;
        x = startPoint[0];
        y = startPoint[1];
        startPoint[1]--;
        array.push([x,y]);
    }
    return array;
}

function up(length, startPoint, alpha){
    let array = [];
    let index = alpha.indexOf(startPoint[0]);
    for(let i = 0; i < length; i++){
        let x;
        let y;
        x = alpha[index];
        y = startPoint[1];
        index--;
        array.push([x,y]);
    }
    return array;
}

function down(length, startPoint, alpha){
    let array = [];
    let index = alpha.indexOf(startPoint[0]);
    for(let i = 0; i < length; i++){
        let x;
        let y;
        x = alpha[index];
        y = startPoint[1];
        index++;
        array.push([x,y]);
    }
    return array;
}

function generateCoordinates(length, startPoint, direction, alpha) {
    if(direction == "r"){
        return right(length, startPoint);
    }
    if(direction == 'u'){
        return up(length, startPoint, alpha);
    }
    if(direction == 'd'){
        return down(length, startPoint, alpha);
    }
    if(direction == 'l'){
        return left(length, startPoint);
    }
}

const ship = (l, startPoint, direction) => {
    let alphas = 'abcdefghij';
    let alpha = alphas.split('');
    if(!validEntry(l, startPoint, direction, alpha)){
        return 'Ship goes out of bounds. Try again'
    };
    const length = l;
    const coords = generateCoordinates(l, startPoint, direction, alpha);
    const hitLog = [0, 0, 0, 0, 0];

    return {length, coords, hitLog};
}

export default ship;