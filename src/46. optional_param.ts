// Optional Parameter:
// Not mandatory to pass the value for optional param
// Optional Param should be written at the end after the required params
// It should be written with ?

function getBilling(foodBill: number, tax?: number, vat?: number): void {
    if (tax && vat) {
        console.log(foodBill + tax + vat);
    }
    else if (tax) {
        console.log(foodBill + tax);
    }
    else {
        console.log(foodBill);
    }
}

getBilling(1000, 18, 5); //1023
getBilling(1000, 18); //1018
getBilling(1000); //1000

console.log('--------------------------');

function calcPrice(amount: number, discount: number = 0) {
    return amount - (amount * discount) / 100;
}

console.log(calcPrice(100, 5)); //95
console.log(calcPrice(100)); //100

