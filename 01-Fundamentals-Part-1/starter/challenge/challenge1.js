
function getBMI(weight, height){
    return weight / height**2;
}
function hasHigherBmi(firstBMI, secondBMI){
    return firstBMI > secondBMI;
}
function getAnalysis(name, weight, height){
    return `${name} weights ${weight} kg and is ${height} m tall.`;
}

let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = getBMI(markWeight, markWeight);
let johnBmi = getBMI(johnWeight, johnWeight);
let markHigherBMI = hasHigherBmi(markBmi, johnBmi);

console.log(`Data 1: ${getAnalysis("Mark",markWeight,markHeight)} ${getAnalysis("John",johnWeight,johnHeight)}`)
console.log(`Mark's BMI is ${markHigherBMI ? "higher" : "not higher"}`);

markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

markBmi = getBMI(markWeight, markWeight);
johnBmi = getBMI(johnWeight, johnWeight);

markHigherBMI = hasHigherBmi(markBmi, johnBmi);

console.log(`Data 2: ${getAnalysis("Mark",markWeight,markHeight)} ${getAnalysis("John",johnWeight,johnHeight)}`)
console.log(`Mark's BMI is ${markHigherBMI ? "higher" : "not higher"}`);