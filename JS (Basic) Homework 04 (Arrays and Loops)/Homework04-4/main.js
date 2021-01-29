function OneTwenty() {


    let empty = " "
 
    for (i = 1; i <= 20; i++) {

        if (i % 2 == 0) {
            empty += `${i}` + "\n";
        } else if (i % 2 != 0) {
            empty += `${i}` + " ";
        }

    }
    return empty;
}

console.log(OneTwenty());