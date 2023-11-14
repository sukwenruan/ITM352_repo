//invoice.js (referenced from Store1)

//fetch query string parameters
const params = new URL(document.location).searchParams;

//loop expected quantity paramters and update quantity array
let quantity=[];

for (let i = 0; i < products.length; i++) {
  let quantityValue = params.get(`quantity${i}`);
  if (quantityValue !== null) {
      quantity[products[i].qty_available] = Number(quantityValue);
  }
}

//initialize variables
let subtotal=0;
let shipping = 0; 
let tax_rate = 0.0575;
let tax=0;
let total = 0;

//Populate table rows with DOM manipulation
generateItemRows();

//Compute shipping
if(subtotal<=50) {
    shipping=5;
  } else if(subtotal<=100) {
    shipping=10;
  } else {
    shipping=0.15*subtotal;
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
  for(let i=0;i<products.length;i++){
    let product = products[i];
    let itemQuantity = quantity[product.qty_available];
    let validationMessage = validateQuantity(itemQuantity); //validates quantity

    //displays errors when validating quantity
    if(validationMessage !== ""){ 
        hasErrors = true;
        let row =table.insertRow();
        row.insertCell(0).insertHTML = product.name;
        row.insertCell(1).innerHTML = validationMessage;
        row.insertCell(2).innerHTML ="";
        row.insertCell(2).innerHTML = "";
    
    //calculates extended price if valid
    } else if(itemQuantity >0){ 
       let extendedPrice = product.price * itemQuantity; 
        subtotal += extendedPrice;

        //populates table rows 
        let row = table.insertRow();
        row.insertCell(0).innerHTML = product.name;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = "$" + product.price.toFixed(2);
        row.insertCell(3).innerHTML = "$"+extendedPrice.toFixed(2);

      }
  }
//displays total if no errors
if (!hasErrors) {
  document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
}
}

