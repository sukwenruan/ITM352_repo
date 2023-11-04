//receipt.js
let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));

let brand = products[0]['brand'];
let brand_price = products[0]['price'];

//increments number of items sold for first item in products
products[0].total_sold +=q;

let validationMessage = validateQuantity(q);

if (validationMessage === "") {
    document.getElementById('receiptContent').innerHTML = `<h2>Thank you for purchasing ${q} ${brand}. Your total is \$${q * brand_price}!</h2>`;
} else {
    alert(validationMessage+ `  Error: ${q} is not a quantity. Hit the back button to fix.`);
    document.getElementById('receiptContent').innerHTML = (validationMessage+'<br>'+`Error: ${q} is not a quantity. Hit the back button to fix.`);
}
//function to validate quantity (part 3)
function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }

    return errorMessage;
}
