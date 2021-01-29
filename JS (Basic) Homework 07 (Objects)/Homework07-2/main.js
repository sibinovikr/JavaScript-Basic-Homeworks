
function Book(title, author, readingStatus){

    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.checkAvailability = function(){
        if(readingStatus == true){
            return "Already read " + title + " by " + author;
        } else {
            return "You still need to read " + title + " by " + author;
        }
    };
}

let title = prompt("Enter book title.");
let author = prompt("Enter book author.")
let readingStatus = prompt("Answer with 'Yes' or 'No'.");
if(readingStatus === "Yes"){
    readingStatus = true;
} else {
    readingStatus = false;
}

let User = new Book(title, author, readingStatus);

console.log(User.checkAvailability());