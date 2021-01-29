let fiveNumbers = [7, 15, 23, 42, 48];

function sumOfFiveNumbers(input){
    let counter = 0;
    let sum = 0;
    let b = 5;

    while (counter < b) {
    sum = sum + input[counter];
    counter++;
    }
    return sum;  
}

console.log(sumOfFiveNumbers(fiveNumbers))


//Bonus:

let fiveNumbersSecond = [15, 75, 57, 91, 's'];

function validateNumber (input){

    for(let counter=0; counter<input.length; counter++){
    let a = input[counter];
    let b = isNaN(a)
        if ( b === false){
         console.log(`This number ${input[counter]} is a valid number!`);
        }
        else if (b === true){
         console.error(`This number ${input[counter]}  is not a valid number!`);
        }
    }
}   

console.log (validateNumber (fiveNumbersSecond));
