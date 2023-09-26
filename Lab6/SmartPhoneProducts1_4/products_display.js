//declare and push to the DOM the store name at top and bottom
const store_name = "Sukwen Ruan";
top_title.innerHTML=(store_name+"'s Used Smart Phone Store");
bottom_title.innerHTML=("Your One Stop Phone Shop - "+store_name+"'s")

//initialize hits and spins and send to the DOM
let hits=0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

//changes item name to rotate for images and updates hits & spins
function changeClassName(element) {
    element.className = 'item rotate';
    spins=spins+1;
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
}

//changes item name to remove rotate for images and updates hits & spins
function resetClassName(element) {
    element.className = 'item';
    hits=hits+=2;
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
}