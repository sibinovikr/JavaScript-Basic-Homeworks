let year = prompt("Please insert your birth year.");

let zodiacNum = (year-4) % 12;

if(zodiacNum == 0){
    alert("Your Chinese Zodiac is Rat");
} else if (zodiacNum == 1){
    alert("Your Chinese Zodiac is Ox");
} else if (zodiacNum == 2){
    alert("Your Chinese Zodiac is Tiger");
} else if (zodiacNum == 3){
    alert("Your Chinese Zodiac is Rabbit");
} else if (zodiacNum == 4){
    alert("Your Chinese Zodiac is Dragon");
} else if (zodiacNum == 5){
    alert("Your Chinese Zodiac is Snake");
} else if (zodiacNum == 6){
    alert("Your Chinese Zodiac is Horse");
} else if (zodiacNum == 7){
    alert("Your Chinese Zodiac is Goat");
} else if (zodiacNum == 8){
    alert("Your Chinese Zodiac is Monkey");
} else if (zodiacNum == 9){
    alert("Your Chinese Zodiac is Rooster");
} else if (zodiacNum == 10){
    alert("Your Chinese Zodiac is Dog");
} else if (zodiacNum == 11){
    alert("Your Chinese Zodiac is Pig");
}