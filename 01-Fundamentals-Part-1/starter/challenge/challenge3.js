let dolphinsGame1 = 96;
let dolphinsGame2 = 108;
let dolphinsGame3 = 89;

let koalasGame1 = 88;
let koalasGame2 = 91;
let koalasGame3 = 110;

// Bonus 1
// let dolphinsGame1 = 97
// let dolphinsGame2 = 112
// let dolphinsGame3 = 101

// let koalasGame1 = 109
// let koalasGame2 = 95
// let koalasGame3 = 123

// Bonus 2
// let dolphinsGame1 = 97
// let dolphinsGame2 = 112
// let dolphinsGame3 = 101

// let koalasGame1 = 109
// let koalasGame2 = 95
// let koalasGame3 = 106

let dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
let koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

if (dolphinsAverage > koalasAverage) console.log("Dolphins win!");
else if (dolphinsAverage < koalasAverage) console.log("Koalas win!");
else console.log("Both teams draw!");

//Bonus 1 & 2
// if(dolphinsAverage >= 100 && koalasAverage >= 100){
//     if(dolphinsAverage > koalasAverage) console.log("Dolphins win!");
//     else if(dolphinsAverage < koalasAverage) console.log("Koalas win!");
//     else console.log("Both teams draw!");
// }else if(dolphinsAverage >= 100){
//     console.log("Dolphins win!");
// }else if(koalasAverage >= 100){
//     console.log("Koalas win!");
// }else console.log("No team wins anything");
