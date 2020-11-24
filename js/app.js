let btn = document.querySelector(".btn")
let body = document.querySelector("body")
let value = document.querySelector("#hex-value")
let hexArray = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

btn.addEventListener('click', HexColor)

function HexColor(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * hexArray.length)
        hex += hexArray[index]
    }
    value.textContent = hex
    body.style.backgroundColor = hex
}