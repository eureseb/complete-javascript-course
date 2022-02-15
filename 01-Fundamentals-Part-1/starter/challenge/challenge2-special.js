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
    setHeight(height){
        this.height = height;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getBMI() {
        return this.weight / this.height**2;
    }
    getAnalysis(){
        return `Mark weights ${this.weight} kg and is ${this.height} m tall.`;
    }
}
const compareBMI = (bmi1, bmi2) => {
    return bmi1 > bmi2;
} 


let Mark = new Person(78, 1.69);
let John = new Person(92, 1.95);
//markHigherBMI must be Boolean var
let markHigherBMI = compareBMI(Mark.getBMI(), John.getBMI());


console.log(`Data 1: ${Mark.getAnalysis()} ${John.getAnalysis()}`)
if(markHigherBMI)
    console.log(`Mark's BMI(${Mark.getBMI().toFixed(1)}) is higher than John's BMI (${John.getBM().toFixed(1)})!`);
else console.log(`John's BMI(${John.getBMI().toFixed(1)}) is higher than Marks's BMI(${Mark.getBMI().toFixed(1)})!`);

Mark.setHeight(95);
Mark.setWeight(1.88);
John.setHeight(85);
John.setWeight(1.76);

markHigherBMI = compareBMI(Mark.getBMI(), John.getBMI());

console.log(`Data 2: ${Mark.getAnalysis()} ${John.getAnalysis()}`)
if(markHigherBMI)
    console.log(`Mark's BMI(${Mark.getBMI().toFixed(1)}) is higher than John's BMI (${John.getBMI().toFixed(1)})!`);
else console.log(`John's BMI(${John.getBMI().toFixed(1)}) is higher than Marks's BMI(${Mark.getBMI().toFixed(1)})!`);

