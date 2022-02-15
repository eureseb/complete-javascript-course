/*
    mass : kg
    height : meter

    BMI = MAS / HEIGHT ** 2
*/
class Person {
    
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    getBMI() {
        return this.weight / this.height**2;
    }
}

let Mark = new Person(78, 1.69);
let John = new Person(92, 1.95);

let analysisMark = `Mark weights ${Mark.weight} kg and is ${Mark.height} m tall.`
let analysisJohn = `John weights ${John.weight} kg and is ${John.height} m tall.`

let markHigherBMI = () => {
    return Mark.getBMI() > John.getBMI();
}

console.log(`Data 1: ${analysisMark} ${analysisJohn}`)
if(markHigherBMI())
    console.log("Mark's BMI is higher");
else console.log("Mark's BMI is not higher");

Mark.weight = 95;
Mark.height = 1.88;

John.weight = 85;
John.height = 1.76;

console.log(`Data 2: ${analysisMark} ${analysisJohn}`)
if(markHigherBMI())
    console.log("Mark's BMI is higher");
else console.log("Mark's BMI is not higher");

