const changeColor = (e) => {
    // e.target.classList.add('pink')
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

const generateSketchpad = (num) =>{
    const container = document.querySelector('.container')
    while(container.firstChild){
        container.removeChild(firstChild)
    }
    for (let i = 0; i < num; i++) {
		let div = document.createElement('div')
        div.classList.add('square')
        div.addEventListener('mouseover', changeColor)
		document.querySelector('.container').appendChild(div)
	}
}

document.addEventListener('DOMContentLoaded', ()=>{
    const inputBtn = document.getElementById('inputButton')
    const inputBox = document.getElementById('inputBox')
    inputBtn.addEventListener('click', ()=>{
        generateSketchpad(inputBox.value)
    })  
})