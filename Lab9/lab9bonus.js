//array of numbers and tax_rate for inputs
let monthly_sales = [100, 200, 300, 400];
let tax_rate = 0.04; //4.00% tax

//function to calculate tax owing for each month's sales
function calculateTax(monthly_sales, tax) {
    let tax_owing = [];
    for (let i = 0; i < monthly_sales.length; i++) {
        tax_owing.push(monthly_sales[i]*tax);
    }
    return tax_owing;
};

let tax_owing = calculateTax(monthly_sales, tax_rate);

//outputs in console
console.log(tax_owing);