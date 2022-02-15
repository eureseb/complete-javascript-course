
const calculateTip = (bill) => {
    return bill <= 300 && bill >= 50 ? bill*.15 : bill*.2;
}

let bills = [275, 40, 430];

for(let i = 0; i<bills.length; i++){
    let value = bills[i];
    console.log(`The bill was ${value}, the tip was ${calculateTip(value)}, and the total value ${value+calculateTip(value)}.`);
}