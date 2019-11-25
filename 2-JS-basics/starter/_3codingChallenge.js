
function tipCalculator(bill){

    if( bill > 200){
     totalTipPay = bill * 0.1 ;
    }else if( bill > 50 && bill <= 200){
        totalTipPay = bill * 0.15 ;
    }else{
        totalTipPay = bill * 0.2 ;
    }

     return totalTipPay;
}

bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), 
tipCalculator(bills[2])];
var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(tips);
console.log(finalValues);


