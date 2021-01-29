let firstName = ['John', 'Sarrah', 'George', 'Emily', 'Hannah'];
let lastName = ['Doe', 'Potter', 'Clark', 'Baker', 'Adams'];

function name(firstArray, secondArray) {

    let fullName = [];
    let oneElement = " ";

    for (let i = 1; i < firstArray.length; i++) {

        oneElement = `${i} .${firstArray[i]} ${secondArray[i]}`;
        fullName.push(oneElement);
    }
    return fullName;
}
console.log(name(firstName, lastName));