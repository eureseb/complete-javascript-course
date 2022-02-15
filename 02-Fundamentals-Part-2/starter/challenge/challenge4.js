

const in_between = (smaller, number, bigger) =>{
    return number >= smaller && number <= bigger;
}
const calcTip = bill => {
    return in_between(50, bill, 300) ? bill*.15 : bill*.2;
}
const calcTotal = bill => {
    return calcTip(bill) + bill;
}
const initTips = bills => {
    let tips = [];
    for(let i=0; i<bills.length; i++){
        tips.push(calcTip(bills[i]));
    }
    return tips;
}
const initTotal = bills => {
    let totals = [];
    for(let i=0; i<bills.length; i++){
        totals.push(calcTotal(bills[i]));
    }
    return totals;
}
const msg = (bill,tip,total) => {
    console.log(`Bill is ${bill}, Tip is ${tip.toFixed(2)}, Total is ${total}`);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = initTips(bills);
let totals = initTotal(bills);

let everything = {
    bills, 
    tips, 
    totals
};

for(let i=0; i<10; i++){
    msg(everything.bills[i], everything.tips[i], everything.totals[i]);
}
