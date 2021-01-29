let numbers = [7, 35, 20, 5];
let numbersDiv = document.getElementById("listNumbers");

function printAllNumbers(array, element) {
    let sum = 0;
    element.innerHTML = "";
    element.innerHTML = `<h3>Here is the list of numbers from the given array: </h3>`;
    let UlElement = document.createElement("ul");
    for (i in array) {
        let item = document.createElement("li");
        item.innerText = `${array[i]}`;
        UlElement.appendChild(item);
    }

    element.appendChild(UlElement);
    let SumParagraph = document.createElement("p");

    for (a of array) {
        sum += a;
        SumParagraph.innerText = `The sum is : ${sum}`;
    }
    element.appendChild(SumParagraph);

}

printAllNumbers(numbers, numbersDiv);


// Bonus: 


function printString(element){
let sum = 0;
let equasion = document.createElement("p");
let elementsString = "";

for (let i = 0; i < numbers.length; i++) {
    let data = numbers[i];
    if(i == 0) elementsString += data;
    else elementsString += "+" + data;
    equasion.innerText = "";
    sum += numbers[i];
    equasion.innerText = "Whole mathematical equasion: " + elementsString + "=" + sum ; 
    element.appendChild(equasion);

}
}

printString(numbersDiv);
console.log(numbersDiv);