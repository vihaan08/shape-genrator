const circle =document.getElementById("circle")
const square =document.getElementById("square")
const rectangle =document.getElementById("rectangle")

const button=document.getElementById("button")

var numberInTheShape = 1
var oldNumber =0

button.onclick=()=>{
    let n = document.getElementById("number").value 
    const box = document.getElementById("box")

    n = Number (oldNumber) + Number(n)
    for(let j=numberInTheShape;j<=n; j++) 
       { var shape = document.createElement("div")
        shape.innerHTML += numberInTheShape;
        if(circle.checked)
        shape.classList.add("circle")
        else if (square.checked)
        shape.classList.add("square")
        else if (rectangle.checked)
        shape.classList.add("rectangle")
        box.appendChild(shape);
        numberInTheShape++;
        oldNumber = box.lastElementChild.innerHTML
    }
}