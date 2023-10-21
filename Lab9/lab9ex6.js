//Define attributes variable

let attributes  =  "Sukwen;19;19.5;18.5";


let pieces = attributes.split(";");
/*
for (let i = 0; i < pieces.length; i++) {
    console.log(`${pieces[i]}, ${typeof pieces[i]}`);
}

//invert pieces back into string
let invert=pieces.join(",");
console.log(invert);
*/

//Lab9 4a
function checksForInt(q, returnErrors = false) {
  //checks if value is an integer or not
    let errors = [];
  
    if (Number(q) != q) errors.push('Not a number!');
    if (q < 0) errors.push('Negative value!');
    if (parseInt(q) != q) errors.push('Not an integer!');
  
    return returnErrors ? errors : (errors.length == 0);
}
  
// Loop through the pieces array and test each element
for (let i = 0; i < pieces.length; i++) {
  console.log(`Element "${pieces[i]}" errors: ${checksForInt(pieces[i], true)}`);
}

/*
//part 6 define a checkIt function with 1st parameter item and 2nd parameter index
function checkIt(item, index) {
    console.log(`part ${index} is ${(checksForInt(item)?'a':'not a')} quantity`);
}

//Use checkIt as a callback function in the .forEeach() method for the array pieces
pieces.forEach(checkIt);
*/

//define an anonymous function for the callback directly in the .forEeach()
pieces.forEach((item, index) => {
  console.log(`part ${index} is ${(checksForInt(item) ? 'a' : 'not a')} quantity`);
});