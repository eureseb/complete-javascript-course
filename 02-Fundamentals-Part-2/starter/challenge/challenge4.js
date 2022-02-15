

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
const printLogs = logs => {
    for(let i=0; i<10; i++){
        msg(logs.bills[i], logs.tips[i], logs.totals[i]);
    }
}

//Sample data
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//For bills value between 50 ang 300, 20% charge. Everything else is 15% of bill;
//instantializes tip array;
const tips = initTips(bills);

//Total per bill = bill + tip;
//instantializes totals array;
const totals = initTotal(bills);

//Collection of gross bill, tips, and net total;
const logs = {
    bills, 
    tips, 
    totals
};

//not the best solution pero it was fun building haha
printLogs(logs);
