let bDay = prompt("Please insert your date of birth in the following (MM/DD/YYYY) \n ex. : 01231994 .");

let todayDate = new Date();
let stringFormatedDate = bDay.match(/(\d\d)(\d\d)(\d\d\d\d)/);
let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1,  stringFormatedDate[2]);

let userBirthDay = date.getDate();
let userBirthMonth = date.getMonth() +1 ;
let userBirthYear = date.getFullYear();

let todayDateDate = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() + 1;
let todayDateFullYear = todayDate.getFullYear();

let yearDifference = todayDateFullYear - userBirthYear;

if((todayDateMonth == userBirthMonth) && (todayDateDate == userBirthDay)){
    alert("Happy Birthday!");
}

if(yearDifference >= 18){
    alert("Полнолетен сум");
} else if((yearDifference == 18) && (todayDateMonth > userBirthMonth)){
    alert("Полнолетен сум");
} else if((yearDifference == 18) && (todayDateMonth == userBirthMonth) && (todayDateDate > userBirthDay)){
    alert("Полнолетен сум");
} else {
    alert("Малолетен сум");
}