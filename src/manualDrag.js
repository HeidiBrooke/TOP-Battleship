const alphas = "abcdefghij";
const alpha = alphas.split("");

// const removeStyle = (old) => {
//     old[0].classList.remove('draghover')
// }
// const styleNode = (dropElem) => {
//     if(dropElem.classList[0] !== undefined){
//         dropElem.classList.add('draghover');
//         if(dropElem.classList[0].split('')[0] === 'u'){
//             const old = document.getElementsByClassName('draghover');
//         if(old[0] !== undefined){
//         setTimeout(removeStyle(old), 5000)
//         }
            
//         }
//     } 
// }



const manualDrag = (node) => {
            const board = document.getElementById('mainBoard');
            const ball = node;
            console.log(ball.parentElement)
            let index = Array(ball.parentElement.children).indexOf(ball);
            
            ball.onmousedown = function(event) { 
            
            ball.classList.add('dragItem');
            // (1) start the process

            // (2) prepare to moving: make absolute and on top by z-index
            ball.style.position = 'absolute';
            ball.style.zIndex = 1000;
            
            // move it out of any current parents directly into body
            // to make it positioned relative to the body
            document.body.append(ball);
            // board.appendChild(ball);
            // ...and put that absolutely positioned ball under the cursor

            let dropElem;

            // centers the ball at (pageX, pageY) coordinates
            function moveAt(pageX, pageY) {
            ball.style.left = `${pageX - ball.offsetWidth / 2  }px`;
            ball.style.top = `${pageY - ball.offsetHeight / 2  }px`;
            const dropElemList = document.elementsFromPoint(pageX, pageY);
            console.log(dropElemList)
            dropElem = dropElemList[2];
            console.log(dropElem)
            // styleNode(dropElem)
            }

            

            moveAt(event.pageX, event.pageY);

            function onMouseMove(ev) {
            moveAt(ev.pageX, ev.pageY);
            // const unElem =  document.getElementsByClassName('draghover')[0];
            //dropElem.classList.remove('draghover')
            }

            // (3) move the ball on mousemove
            document.addEventListener('mousemove', onMouseMove);

            // (4) drop the ball, remove unneeded handlers
            ball.onmouseup = function() {
                ball.style.position = '';
                ball.style.left = '';
                ball.style.top = '';
                ball.style.zIndex = '';
                ball.classList.remove('dragItem')
                if((dropElem.classList[0] !== undefined)
                    && (dropElem.classList[0].split('')[0] === 'u'))
                {
                    const loc = dropElem.id.split("");
                    console.log(loc)
      const col1 = Number(loc[1]) + 2;
      const col2 = col1 + 1;
      const row1 = alpha.indexOf(loc[0]) + 2;
      const row2 = row1 + 1;
      
      ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
      
                }
            const shipHolder = document.getElementsByClassName('shipHolder')[0]
                
            // const drop = new Event('drop')
            
            // dropElem.dispatchEvent(drop);
            document.removeEventListener('mousemove', onMouseMove);
            console.log('dropping')
            console.log( dropElem)

            if(dropElem.classList[0] !== 'unitm'){
                index+=1;
                shipHolder.insertBefore(ball, shipHolder.children[index]);
            }
            else{
                board.appendChild(ball);
            }
            
            
            
            // ball.style.zIndex ='1000'
            // const drop = new Event("drop");
            
            // Dispatch the event.
            



            ball.onmouseup = null;
            };

        }
    }

    export default manualDrag