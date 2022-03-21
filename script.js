let small = {
    name: "small",
    price: 500,
    }
 
let medium = {
    name: "medium",
    price: 800,
    }
  
let large = {
    name: "large",
    price: 1000,
    }

let XL = {
    name: "XL",
    price: 1300, 
    }

let crispy = {
    name: "crispy",
    price: 100,
    }

let stuffed = {
    name: "stuffed",
    price: 150,
    }

let glutenfree = {
    name: "gluten free",
    price: 200,
    }

let macon = {
    name: "macon",
    price: 250,
    }
  
let mince = {
    name: "mince",
    price: 200,
    }
  
let pineapple = {
    name: "pineapple",
    price: 150,
    }
  
let greenpepper = {
    name: "greenpepper",
    price: 100,
    }

let olives = {
    name: "olives",
    price: 100,
    }

let within = {
    name: "within CBD",
    price: 100,
    }

let outside = {
    name: "outside CBD",
    price: 300,
    }

let total=document.getElementById("total")
let checkButton=document.querySelector("#checkout")
checkButton.addEventListener("click",function(l){
    l.preventDefault();
    ntaba()
})
function ntaba(){
    let toppings=document.getElementById("toppings").value
    let crust=document.getElementById("crust").value
    let sizesel=document.getElementById("sizes").value
    let total2;
    if(toppings==="macon"&&crust==="crispy"&&sizesel==="small"){
       total2=macon.price+crispy.price+small.price;
       total.innerText=total2;
    }else if(toppings==="macon"&&crust==="crispy"&&sizesel==="medium"){
        total2=macon.price+crispy.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="crispy"&&sizesel==="large"){
        total2=macon.price+crispy.price+large.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="stuffed"&&sizesel==="small"){
        total2=macon.price+stuffed.price+small.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="stuffed"&&sizesel==="medium"){
        total2=macon.price+stuffed.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="stuffed"&&sizesel==="large"){
        total2=macon.price+stuffed.price+large.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="glutenfree"&&sizesel==="small"){
        total2=macon.price+glutenfree.price+small.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="glutenfree"&&sizesel==="medium"){
        total2=macon.price+glutenfree.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="macon"&&crust==="glutenfree"&&sizesel==="large"){
        total2=macon.price+glutenfree.price+large.price;
        total.innerText=total2;
    }else if(toppings==="mince"&&crust==="crispy"&&sizesel==="small"){
        total2=mince.price+crispy.price+small.price;
        total.innerText=total2;
    }else if(toppings==="mince"&&crust==="crispy"&&sizesel==="medium"){
        total2=mince.price+crispy.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="mince"&&crust==="crispy"&&sizesel==="large"){
        total2=mince.price+crispy.price+large.price;
        total.innerText=total2;
    }else if(toppings==="pineapple"&&crust==="stuffed"&&sizesel==="small"){
        total2=pineapple.price+stuffed.price+small.price;
        total.innerText=total2;
    }else if(toppings==="pineapple"&&crust==="stuffed"&&sizesel==="medium"){
        total2=pineapple.price+stuffed.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="pineapple"&&crust==="stuffed"&&sizesel==="large"){
        total2=pineapple.price+stuffed.price+large.price;
        total.innerText=total2;
    }else if(toppings==="greenpepper"&&crust==="crispy"&&sizesel==="small"){
        total2=greenpepper.price+crispy.price+small.price;
        total.innerText=total2;
    }else if(toppings==="greenpepper"&&crust==="crispy"&&sizesel==="medium"){
        total2=greenpepper.price+crispy.price+medium.price;
        total.innerText=total2;
    }else if(toppings==="greenpepper"&&crust==="crispy"&&sizesel==="large"){
        total2=greenpepper.price+crispy.price+large.price;
        total.innerText=total2;
    }
}