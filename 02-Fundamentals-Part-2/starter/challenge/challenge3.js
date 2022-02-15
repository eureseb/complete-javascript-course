
const Mark = {
    mass: 78,
    height: 1.69
}

const John = {
    mass: 92,
    height: 1.95
}

const calcBMI = (mass, height) => {
    return mass / height**2;
}

markBMI = calcBMI(Mark.mass,Mark.height);
johnBMI = calcBMI(John.mass,John.height);

const checkHigherBMI = (markBMI, johnBMI) => {
    if(markBMI > johnBMI){
        return `Mark has higher bmi 💪`;
    }else if(johnBMI > markBMI){
        return `John has higher bmi 👊`;
    }else return `They have same bmi 🤝`;
}
console.log(checkHigherBMI(markBMI, johnBMI));