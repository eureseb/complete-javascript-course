/*
    mass : kg
    height : meter

    BMI = MASS / HEIGHT ** 2
*/
class Person {
    
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    getBMI() {
        return this.weight / this.height**2;
    }
    getAnalysis(){
        return `Mark weights ${this.weight} kg and is ${this.height} m tall.`;
    }
}
let compareBMI = (person1, person2) => {
    return person1.getBMI() > person2.getBMI();
} 


let Mark = new Person(78, 1.69);
let John = new Person(92, 1.95);
//markHigherBMI must be Boolean var
let markHigherBMI = compareBMI(Mark, John);


console.log(`Data 1: ${Mark.getAnalysis()} ${John.getAnalysis()}`)
if(markHigherBMI)
    console.log("Mark's BMI is higher");
else console.log("Mark's BMI is not higher");

Mark.weight = 95;
Mark.height = 1.88;

John.weight = 85;
John.height = 1.76;

markHigherBMI = compareBMI(Mark, John);

console.log(`Data 2: ${Mark.getAnalysis()} ${John.getAnalysis()}`)
if(markHigherBMI)
    console.log("Mark's BMI is higher");
else console.log("Mark's BMI is not higher");

