//invoice.js

//fetch query string parameters
const params = new URL(document.location).searchParams;

//loop expected quantity paramters and update quantity array
let quantity=[];

for (let i = 0; i < itemData.length; i++) {
  let quantityValue = params.get(`quantity${i}`);
  if (quantityValue !== null) {
      quantity[itemData[i].quantityIndex] = Number(quantityValue);
  }
}

//import data from products.js into this file
import { itemData } from './products.js';

//Compute subtotal
//let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5


//variables
let subtotal=0;
let shipping = 0; 
let tax_rate = 0.0575;
let tax=0;
let total = 0;

//Populate table rows with DOM manipulation
//let table = document.getElementById('invoiceTable');
generateItemRows();

//Compute shipping
if(subtotal<=50) {
    shipping=2;
  } else if(subtotal<=100) {
    shipping=5;
  } else {
    shipping=0.05*subtotal;
}

//compute tax
tax = tax_rate*subtotal;

//compute grand total
total = subtotal + tax + shipping;

//set subtotal, tax, shipping, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);

//function to validate quantity
function validateQuantity(quantity){
  if(isNaN(quantity)){
      return "Not a Number";
  }else if (quantity<0 && !Number.isInteger(quantity)){
      return "Negative Inventory and not an Integer";
  }else if (quantity <0){
      return "Negative Inventory";
  }else if(!Number.isInteger(quantity)){
      return "Not an Integer";
  }else{
      return"";
  }

}

//function to generate rows with validationQuantity
function generateItemRows(){
  let table = document.getElementById("invoiceTable");
  table.innerHTML =''; //clears table content
  let hasErrors = false; 
  //loop through itemData and quantity arrays
  for(let i=0;i<itemData.length;i++){
    let item = itemData[i];
    let itemQuantity = quantity[item.quantityIndex];
    let validationMessage = validateQuantity(itemQuantity); //validates quantity
    if(validationMessage !== ""){ //displays errors when validating quantity
        hasErrors = true;
        let row =table.insertRow();
        row.insertCell(0).insertHTML = item.brand;
        row.insertCell(1).innerHTML = validationMessage;
        row.insertCell(2).innerHTML ="";
        row.insertCell(2).innerHTML = "";
    } else if(itemQuantity >0){ //calculates extended price if valid
       let extendedPrice = item.price * itemQuantity; 
        subtotal += extendedPrice;

        //populates
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = "$" + item.price.toFixed(2);
        row.insertCell(3).innerHTML = "$"+extendedPrice.toFixed(2);

      }
  }
//displays total if no errors
if (!hasErrors) {
  document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
}
}
