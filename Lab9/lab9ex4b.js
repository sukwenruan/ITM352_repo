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