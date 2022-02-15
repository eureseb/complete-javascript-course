
let dolphins = [44, 23, 71];
let koalas = [88, 50, 150]
//functions
const getAverage = scores => scores.reduce( (a,b)=>a+b ,0) / scores.length;
const checkWinner = (dolphinsAve, koalasAve) => {
    if(dolphinsAve >= 2*koalasAve){
        console.log(`Dolphins win! 🏆`);
    }else if(koalasAve >= 2*dolphinsAve){
        console.log(`Koalas win! 🏆`);
    }else console.log("No team wins");
}
let dolphinsAve = getAverage(dolphins);
let koalasAve = getAverage(koalas);

checkWinner(dolphinsAve, koalasAve);



// console.log(average);