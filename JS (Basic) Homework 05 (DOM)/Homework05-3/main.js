let recipeDiv = document.getElementById("recipe");
let nameTheRecipe = prompt("Enter the name of the recipe:");
let headerName = document.createElement("h2");

headerName.innerText = `This is a recipe for ${nameTheRecipe}`;
recipeDiv.appendChild(headerName);

let numberOfIngredients = parseInt(prompt("Enter the number of ingredients for this recipe:"));
let recipeParagraph = document.createElement("p")

recipeParagraph.innerText = `For this recipe you will need a total number of ${numberOfIngredients} ingrediants. You can find the Full List below:`
recipeDiv.appendChild(recipeParagraph);

let ingredientsArray = [];

function createAnArrayfromUser() {

    let ingredientString = ""

    for (i = 0; i < numberOfIngredients; i++) {
        let ingredientFromUser = prompt(`Enter the ${i} Ingredient:`);
        ingredientString = `${ingredientFromUser}`;
        ingredientsArray.push(ingredientString);
    }
    return ingredientsArray;
}

console.log(createAnArrayfromUser());
console.log(ingredientsArray);

function createAfancyTable(element) {

    let tableFirstStep = document.createElement("table");
    let tableBodySecondStep = document.createElement("tbody");

    for (i = 0; i < ingredientsArray.length; i++) {
        let trThirdStep = document.createElement("tr");
        tableBodySecondStep.appendChild(trThirdStep);
        let tdFourthStep = document.createElement("td");
        tdFourthStep.innerText = `${ingredientsArray[i]}`;
        trThirdStep.appendChild(tdFourthStep);
    }


    tableFirstStep.setAttribute("border", "1");
    tableFirstStep.appendChild(tableBodySecondStep);
    element.appendChild(tableFirstStep);

}

 console.log(createAfancyTable(recipeDiv));


