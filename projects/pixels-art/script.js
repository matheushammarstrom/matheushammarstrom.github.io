const button1 = document.querySelector('.color')
const button2 = document.querySelector('.green')
const button3 = document.querySelector('.blue')
const button4 = document.querySelector('.red')
const inputButton = document.querySelector('#generate-board')
const inputSize = document.querySelector('#board-size')

button1.addEventListener('click',switchColor)
button2.addEventListener('click', switchColor);
button3.addEventListener('click', switchColor);
button4.addEventListener('click', switchColor);
button1.classList.add('selected')
inputButton.addEventListener('click', createNewGrid)

document.querySelector('#clear-board').addEventListener('click', clearBoard)

function generateColors(){
    button2.style.backgroundColor = '#'+ randomColor();
    button3.style.backgroundColor = '#'+ randomColor();
    button4.style.backgroundColor = '#'+ randomColor();
}

function makeGridEvents(){
    let index = document.querySelectorAll('.pixel').length 
    for(let count = 0; count < index; count += 1){
        let currentBlock = document.querySelectorAll('.pixel')[count]
        currentBlock.addEventListener('click', paint)
    }
}

function paint(event){
    let currentColor = document.querySelector('.selected')
    let setColor =  window.getComputedStyle(currentColor).backgroundColor
    event.target.style.backgroundColor = setColor
}

function switchColor(event){
    let actualColor = document.querySelector('.selected');
    actualColor.classList.remove('selected')
    event.target.classList.add('selected')
}
function createNewGrid(){
    if(inputSize.value === ''){
        alert('Board inválido!')
    }
    else{
        createGrid()
    }
}
function createGrid(){
    removeGrid();
    handleInvalidNumbers();
    if(inputSize.value){

        var numberOfLines = inputSize.value; 
    }
    else{
        var numberOfLines = 5
    }
    numberOfColumns = numberOfLines;
    for(let index = 0; index < numberOfLines; index += 1){
        let pixelBoard = document.querySelector('#pixel-board')
        let newLine = document.createElement('div')
        newLine.classList.add('line-pixel')
        pixelBoard.appendChild(newLine)
        let currentLine = document.querySelectorAll('.line-pixel')[index]
        for(let index2 = 0; index2 < numberOfColumns; index2 +=1 ){
            let pixelBox = document.createElement('div')
            pixelBox.className = 'pixel'
            currentLine.appendChild(pixelBox) 
        }
    }
    makeGridEvents();
}
function handleInvalidNumbers(){
    if(inputSize.value < 5 && inputSize.value){
        inputSize.value = 5
    }
    else if(inputSize.value > 50){
        inputSize.value = 50
    }
}
function clearBoard(){
    let index = document.querySelectorAll('.pixel').length 
    for(let count = 0; count < index ; count += 1){
        document.querySelectorAll('.pixel')[count].style.backgroundColor = 'white'
    }
}
function removeGrid(){
    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.innerHTML = ''
}
function randomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}
generateColors();
createGrid();