const pizzaList = [
  //Veg Pizzas

  // BUDGET PIZZAS veg
  {
    name:"Margherita",
    info:"Classic delight with 100% real mozzarella cheese",
    img:"./images/v_margherita.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70"
  },
  {
    name:"Cheese n Tomato",
    info:"A delectable combination of cheese and juicy tomato",
    img:"./images/v_cheese_and_tomato.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70"
  },
  {
    name:"Farmhouse",
    info:"Delightful combination of onion, capsicum, tomato & grilled mushroom",
    img:"./images/v_farmhouse.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70"
  },
  {
    name:"Peppy Paneer",
    info:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    img:"./images/v_peppy_paneer.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70"
  },

  // Expensive Pizzas veg
  {
    name:"Mexican Green Wave",
    info:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
    img:"./images/v_mexican_green_wave.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  },
  {
    name:"Deluxe Veggie",
    info:"Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
    img:"./images/v_deluxe_veggie.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  },
  {
    name:"Veg Extravaganza",
    info:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    img:"./images/v_veg_extravaganza.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  },
  // Budget pizzas non-veg
  {
    name: "Pepper Barbecue Chicken",
    info: "Pepper barbecue chicken for that extra zing",
    img: "./images/n_pepper_barbeque_chicken.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70"
  },
  {
    name:"Chicken Fiesta",
    info:"Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta",
    img:"./images/n_chicken_fiesta.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70"
  },
  {
    name:"Chicken Golden Delight",
    info:"Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    img:"./images/n_chicken_golden_delight.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70"
  },
  {
    name:"Chicken Dominator",
    info:"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka.",
    img:"./images/n_chicken_dominator.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70"
  },
  // Expensive pizzas non-veg
  {
    name:"Chicken Pepperoni",
    info:"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    img:"./images/n_chickenpepperoni.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  },
  {
    name: "Non Veg Supreme",
    info: "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken",
    img: "./images/n_non_veg_supreme.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  },
  {
    name: "Tandoori Chicken Tikka",
    info: "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    img: "./images/n_tandoori_chicken_tikka.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100"
  }
]

  
const url_string = window.location.href;
const url = new URL(url_string);
const params = new URLSearchParams(url.search);
const cardID = params.get('cardID');
const pizzaObj = pizzaList[cardID-1];

// Global variables for Price;

let sizePriceVal= parseInt(pizzaObj.price_s);
let crustPriceModifier=0;
let cheesePriceModifier=0;
let totalPrice = sizePriceVal + crustPriceModifier + cheesePriceModifier;


window.onload = function(){

  // Set static info
  DOM_card = document.getElementById('customize-card');
  DOM_card.children[0].src=pizzaObj.img;;
  DOM_card.children[1].children[0].textContent = pizzaObj.name;

  //Set DD size
  const size_dd = document.getElementById('size_dropdown');
  size_dd.children[0].innerHTML = "Small ₹"+pizzaObj.price_s;
  size_dd.children[1].innerHTML = "Medium ₹"+pizzaObj.price;
  size_dd.children[2].innerHTML = "Large ₹"+pizzaObj.price_l;

  //Set DD crust
  const crust_dd = document.getElementById('crust_dropdown');
  crust_dd.children[1].innerHTML = "Pan Pizza +₹"+pizzaObj.crust_pan;
  crust_dd.children[2].innerHTML = "Wheat Crust +₹"+pizzaObj.crust_wheat;

  //Set extra cheese & total price
  document.getElementById('cheese-lb').innerHTML = pizzaObj.ex_cheese;
  document.getElementById('add_price').innerHTML = "₹ "+pizzaObj.price_s;

}

function sizeDrop(){
  let x = document.getElementById('size_dropdown').value;
  const addPrice = document.getElementById('add_price');

  if(x=='Small')
    sizePriceVal = parseInt(pizzaObj.price_s);
  else if(x=='Medium')
    sizePriceVal = parseInt(pizzaObj.price);
  else if(x=='Large')
    sizePriceVal = parseInt(pizzaObj.price_l);

  totalPrice = sizePriceVal + crustPriceModifier + cheesePriceModifier;
  addPrice.innerHTML = "₹ "+totalPrice;

}

function crustDrop(){
  let x = document.getElementById('crust_dropdown').value;
  let addPrice = document.getElementById('add_price');

  if(x=='Classic')
    crustPriceModifier = 0;
  else if(x=="Pan Pizza")
    crustPriceModifier = parseInt(pizzaObj.crust_pan);
  else if(x=="Wheat Crust")
    crustPriceModifier = parseInt(pizzaObj.crust_wheat);

  totalPrice = sizePriceVal + crustPriceModifier + cheesePriceModifier;
  addPrice.innerHTML = "₹ "+totalPrice;
  
}

function cheeseCheck(){
  let x = document.getElementById('cheese-cb').checked;
  let addPrice = document.getElementById('add_price');
  
  if(x)
    cheesePriceModifier = parseInt(pizzaObj.ex_cheese);
  else if(!x)
    cheesePriceModifier = 0;

  totalPrice = sizePriceVal + crustPriceModifier + cheesePriceModifier;
  addPrice.innerHTML = "₹ "+totalPrice;
}

