function Bank(atm) {

    let withdrawn = parseInt(prompt("Insert amount wanted."));

    if(atm - withdrawn > 0){

        let res = atm - withdrawn;
        console.log("Currnet atm balance is: " + res);
        console.log("Your withdrawn is: " + withdrawn);

    } else {
        console.log("Not enough money!");
    }
}

Bank(2500);