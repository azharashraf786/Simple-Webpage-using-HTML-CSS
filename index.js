let heading = document.getElementById("title");
// console.log(heading);

function changeColor(){
    heading.style.color = "red"
    heading.style.fontSize = "70px"
}

let heading1 = document.getElementById("title1");
// console.log(heading1);

function changeColor1(){
    heading1.style.color = "yellow";
}

let button = document.getElementById("btn")
// console.log(button);

function changeText(){
    button.style.color = "blue"
    button.style.backgroundColor = "lightblue"
    heading.textContent = " Hello JavaScript"
}
