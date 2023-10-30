//declare and push to the DOM the store name at top and bottom
const first_name = "Sukwen";
const last_name = "Ruan";
const store_name = "Sukwen Ruan";

const firstNameSpan = document.getElementById('first_name_span');
const lastNameSpan = document.getElementById('last_name_span');
firstNameSpan.textContent = first_name;
lastNameSpan.textContent = last_name;
top_title.innerHTML=(store_name+"'s Used Smart Phone Store");
bottom_title.innerHTML=("Your One Stop Phone Shop - "+store_name+"'s")

//initialize hits and spins and send to the DOM
let hits=0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

//POKE9 #2
const product1 = {
    brand: "HTC",
    price: "40.00",
    image:"images/HTC.jpg"
};
const product2 = {
    brand: "Apple",
    price: "75.00",
    image: "images/iphone-3gs.jpg"
};
const product3 = {
    brand: "Nokia",
    price: "35.00",
    image: "images/Nokia.jpg"
};
const product4 = {
    brand: "Samsung",
    price: "45.00",
    image: "images/Samsung.jpg"
};
const product5 = {
    brand: "Blackberry",
    price: "10.00",
    image: "images/Blackberry.jpg"
};

const products = [product1, product2, product3, product4, product5];

for (i = 0; i < products.length; i++) {
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this);">
    <h2>${product.brand}</h2>
    <p>$${product.price}</p>
    <img src="${product.image}"/><br>
    <label id="quantity${i}_label" for="quantity${i}">Quantity Desired</label><br>
    <input type="text" name="quantity${i}" id="quantity${i}">
    </section>     
`};

//that bottom table 
//create variables --> DOM for current year and time
const currentYear = new Date().getFullYear();
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const footerTable = `
    <table border="1" style="margin-left: auto; margin-right: auto; text-align: center; font-size: 22px">
        <tr>
            <td></td>
            <td class="table-header">Your One Stop For Used Phones - ${first_name[0]}.${last_name[0]}'s</td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Copyright @ ${first_name} ${last_name}</td>
        </tr>
        <tr>
            <td>2.</td>
            <td>${currentYear}</td>
        </tr>
        <tr>
            <td>3.</td>
            <td>${currentTime}</td>
        </tr>
    </table>
`;
bottom_title.innerHTML = footerTable;

//changes item name to rotate for images and updates hits & spins
function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1
        element.className = 'item rotate';
    } 
    //spins=spins+1;
    if(spins<2*hits&&hits<spins) {
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;    
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
    
    // -- Winning progress depends on hits/spins
    hits_spins_ratio = hits/spins;
    if (hits_spins_ratio > 0 && hits_spins_ratio < 0.25) {
        progress = 'On your way!'; 
        } else if (hits_spins_ratio >= 0.25 && hits_spins_ratio < 0.5) {
            progress = 'Almost there!';
        } else if (hits_spins_ratio >= 0.5 && hits<spins) {
            progress = 'You win!';
    } else {
        progress = 'Get going!';
    }
    win_span.innerHTML=progress;
    }

//changes item name to remove rotate for images and updates hits & spins
function resetClassName(element) {
    if(element.className=='item rotate') {
        hits=hits+=2;
        element.className = 'item';
    } else {
        changeClassName(element);
    }
    if(spins<2*hits&&hits<spins) {
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half; 
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

// -- Winning progress depends on hits/spins
hits_spins_ratio = hits/spins;
if (hits_spins_ratio > 0 && hits_spins_ratio < 0.25) {
    progress = 'On your way!'; 
    } else if (hits_spins_ratio >= 0.25 && hits_spins_ratio < 0.5) {
        progress = 'Almost there!';
    } else if (hits_spins_ratio >= 0.5 && hits<spins) {
        progress = 'You win!';
} else {
    progress = 'Get going!';
}
win_span.innerHTML=progress;
}