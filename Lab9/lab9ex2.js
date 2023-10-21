//Define attributes variable
//attributes = "Sukwen;19;MIS";

let attributes  =  "Sukwen;19;19.5;-18.5";

let pieces = attributes.split(";");
for (let i = 0; i < pieces.length; i++) {
    console.log(`${pieces[i]}, ${typeof pieces[i]}`);
}

//invert pieces back into string
let invert=pieces.join(",");
console.log(invert);

//cut up a string into an array of parts separated by “;”
//let parts = attributes.split(';');

// Output extractions to console
//console.log(parts); 
