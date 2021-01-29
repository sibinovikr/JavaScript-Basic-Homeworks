let today = ['Today', 'is', 'a', 'beautiful', 'day'];

let drink = ['One', 'last', 'drink,', 'please'];


function OneBigString(input) {

    let Result = "";

    for (a of input) {

        let ResultArrays = [`${a}`];

        b = `${ResultArrays}` 

        Result += b + ' ';

        console.log(typeof(Result));
    } 
    return Result;
}

console.log(OneBigString(today)); 
console.log(OneBigString(drink));
