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

let crust=document.getElementById("crust")
let sizesel=document.getElementById("sizes")
let checkButton=document.querySelector("#checkout")
checkButton.addEventListener("click",function(l){
    l.preventDefault();
    console.log(crust.value)
})


