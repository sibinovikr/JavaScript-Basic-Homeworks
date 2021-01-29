
let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "";
firstHeader.innerText = "Changed heading!"

let firstParagraph = document.getElementsByClassName("paragraph")[0];
firstParagraph.textContent = "Changed paragraph one!"

let secondDiv = document.getElementsByClassName("anotherDiv")[0];
let secondParagraph = secondDiv.firstElementChild
secondParagraph.innerText = "";
secondParagraph.innerText = "Changed paragraph two!";
let secondChildToSecondDiv = secondDiv.lastElementChild
secondChildToSecondDiv.innerText = "";
secondChildToSecondDiv.innerText = "Changed text!";

