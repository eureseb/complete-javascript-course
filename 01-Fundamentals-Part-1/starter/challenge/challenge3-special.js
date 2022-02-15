dolphinScores = [97, 112, 101];
koalaScores = [109, 95, 106];

const average = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

let dolphinsAve = average(dolphinScores);
let koalasAve = average(koalaScores);

if (dolphinsAve >= 100 && koalasAve >= 100) {
  if (dolphinsAve > koalasAve) console.log("Dolphins win!");
  else if (dolphinsAve < koalasAve) console.log("Koalas win!");
  else console.log("Both teams draw!");
} else if (dolphinsAve >= 100) {
  console.log("Dolphins win!");
} else if (koalasAve >= 100) {
  console.log("Koalas win!");
} else console.log("No team wins anything");
console.log(dolphinsAve + " " + koalasAve);
