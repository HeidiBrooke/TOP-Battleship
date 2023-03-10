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



let anID;
const manualDrag = (node) => {
            const board = document.getElementById('mainBoard');
            const ball = node;
            const ogParent = ball.parentElement;
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
            let dropElem1;
            
            // centers the ball at (pageX, pageY) coordinates
            function moveAt(pageX, pageY) {
            ball.style.left = `${pageX - ball.offsetWidth / 2  }px`;
            ball.style.top = `${pageY - ball.offsetHeight / 2  }px`;
            const dropElemList = document.elementsFromPoint(pageX, pageY);
            dropElemList.forEach(elem => {
                // console.log('classlist')
                // console.log(Array.from(elem.classList))
                if(elem.classList !== undefined){
                    if(elem.classList.contains('unitm')){
                        console.log(`contains it! return ID: ${elem.id}`)
                        anID = elem.id;
                    }
                }
            })
            console.log(dropElemList)
    
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

            console.log(anID)
            // (4) drop the ball, remove unneeded handlers
            ball.onmouseup = function() {
                console.log('MOUSEUP!')
                ball.style.position = '';
                ball.style.left = '';
                ball.style.top = '';
                ball.style.zIndex = '';
                ball.classList.remove('dragItem')
                console.log(anID)
                if(anID !== undefined)
                {
                    console.log('ID WORKED!')
                    const loc = anID.split('');
                    console.log(loc)
      const col1 = Number(loc[1]) + 1;
      const col2 = col1 + 1;
      const row1 = alpha.indexOf(loc[0]) + 1;
      const row2 = row1 + 1;
      
      ball.style.gridArea = `${row1}/${col1}/${row2}/${col2}`;
      board.appendChild(ball);
                }
                else{
                    ogParent.appendChild(ball);
                }

                
            // const drop = new Event('drop')
            
            // dropElem.dispatchEvent(drop);
            document.removeEventListener('mousemove', onMouseMove);
            

            ball.onmouseup = null;
            };

        }
    }

    export default manualDrag