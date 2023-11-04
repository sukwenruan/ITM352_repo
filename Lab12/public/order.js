//order.js (Lab12 part 5)
//check URL for any error paremeters and quantity to use/display them
let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));
let error = params.get('error');

//if there's errors, alert user
if (error) {
    alert(error);
}

//select div where product details should be displayed
let productDetailsDiv = document.getElementById('productDetails');

//displays first product's details
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//select div where product list will be deployed 
let productListDiv = document.getElementById('productList');

//iterate through products and display sold counts 
for (let i in products) {
    productListDiv.innerHTML += `<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold</h4>`;
}