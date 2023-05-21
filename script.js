


let tipCalc = (bill)=>{
    let tip, total;
    
    if(bill >= 50 && bill <= 300){
         tip = bill*(15/100);
         total = bill + tip;
    }

    else {
        tip = bill*(20/100);
        total = tip + bill;
    }

    return `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;
}


console.log(tipCalc(275));
