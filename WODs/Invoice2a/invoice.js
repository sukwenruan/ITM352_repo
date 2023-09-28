//Product Data

    // Product 1
        var item1 = 'Gillette Sensor 3 Razor';
        var quantity1 = 2;
        var price1 = 1.23;

    // Product 2
        var item2 = 'Barbasol Shaving Cream';
        var quantity2 = 1;
        var price2 = 2.64;
        
    // Product 3
        var item3 = 'Nautica Cologne';
        var quantity3 = 1;
        var price3 = 6.17;

    // Product 4
        var item4 = 'Rubbing Alcohol';
        var quantity4 = 3;
        var price4 = 0.98;

    // Product 5
        var item5 = 'Colgate Classic Toothbrush';
        var quantity5 = 12;
        var price5 = 1.89;

//Compute extended prices
var extended_price1 = quantity1*price1;
var extended_price2 = quantity2*price2;
var extended_price3 = quantity3*price3;
var extended_price4 = quantity4*price4;
var extended_price5 = quantity5*price5;

//Compute subtotal
var subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5

//Compute sales tax
var tax_rate = 0.0575;
var tax = tax_rate*subtotal;

//Compute shipping
if(subtotal<=50) {
    shipping=2;
  } else if(subtotal<=100) {
    shipping=5;
  } else {
    shipping=0.05*subtotal;
}

//Compute grand total
var total = subtotal + tax

//Populate table rows with DOM manipulation
let table = document.getElementById('invoiceTable');

//Create rows for each item

//Product 1
let row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item1}`;
row.insertCell(1).innerHTML = `${quantity1}`;
row.insertCell(2).innerHTML = '$' + `${price1}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price1}`);

//Product 2
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = '$' + `${price2}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price2}`);

//Product 3
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = '$' + `${price3}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price3}`);

//Product 4
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = '$' + `${price4}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price4}`);


//Product 5
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = '$' + `${price5}`;
row.insertCell(3).innerHTML = ('$' + `${extended_price5}`);

document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);