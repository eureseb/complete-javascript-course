function getBMI(weight, height) {
  return weight / height ** 2;
}
function hasHigherBmi(firstBMI, secondBMI) {
  return firstBMI > secondBMI;
}
function getAnalysis(name, weight, height) {
  return `${name} weights ${weight} kg and is ${height} m tall.`;
}

let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = getBMI(markWeight, markHeight);
let johnBmi = getBMI(johnWeight, johnHeight);
let markHigherBMI = hasHigherBmi(markBmi, johnBmi);

console.log(
  `Data 1: ${getAnalysis("Mark", markWeight, markHeight)} ${getAnalysis(
    "John",
    johnWeight,
    johnHeight
  )}`
);
if (markHigherBMI)
  console.log(
    `Mark's BMI(${markBmi.toFixed(
      1
    )}) is higher than John's BMI (${johnBmi.toFixed(1)})!`
  );
else
  console.log(
    `John's BMI(${johnBmi.toFixed(
      1
    )}) is higher than Marks's BMI(${markBmi.toFixed(1)})!`
  );

markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

markBmi = getBMI(markWeight, markHeight);
johnBmi = getBMI(johnWeight, johnHeight);

markHigherBMI = hasHigherBmi(markBmi, johnBmi);

console.log(
  `Data 2: ${getAnalysis("Mark", markWeight, markHeight)} ${getAnalysis(
    "John",
    johnWeight,
    johnHeight
  )}`
);
if (markHigherBMI)
  console.log(
    `Mark's BMI(${markBmi.toFixed(
      1
    )}) is higher than John's BMI (${johnBmi.toFixed(1)})!`
  );
else
  console.log(
    `John's BMI(${johnBmi.toFixed(
      1
    )}) is higher than Marks's BMI(${markBmi.toFixed(1)})!`
  );
