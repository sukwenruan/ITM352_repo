let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

//part 2b
app.get('/test', function(req, res) {
    response.send('app.get for test was executed');
    console.log('app.get for test was executed');
});

app.use(express.urlencoded({ extended: true }));

//part 3a
app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    let q = Number(request.body['qty_textbox']);
    console.log("The input value is..." + q);
    let validationMessage = validateQuantity(q);

    if (validationMessage === "") {
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send(validationMessage+'<br>'+`Error: ${q} is not a quantity. Hit the back button to fix.`);
    }
 });
 
app.all('*', function (request, response, next) {
    // response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
    // next();
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback


//function to validate quantity
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