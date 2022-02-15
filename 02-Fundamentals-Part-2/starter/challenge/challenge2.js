
const in_between = (smaller, number, bigger) =>{
    return number >= smaller && number <= bigger;
}
const calcTip = bill => {
    return in_between(50, bill, 300) ? bill*.15 : bill*.2;
}

bills = [125, 555, 44];

const msg = bill => {
    tip = calcTip(bill);
    console.log(`Bill is ${bill}, Tip is ${calcTip(tip).toFixed(2)}, Total is ${bill+tip}`);
}
bills.forEach(msg);

