const pizzaList = [
  //Veg Pizzas

  // BUDGET PIZZAS veg
  {
    // wed-offer
    name:"Margherita",
    info:"Classic delight with 100% real mozzarella cheese",
    img:"./images/v_margherita.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
  },
  {
    // sun-offer
    name:"Cheese n Tomato",
    info:"A delectable combination of cheese and juicy tomato",
    img:"./images/v_cheese_and_tomato.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
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
    ex_cheese:"70",
    category : "budget_veg"
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
    ex_cheese:"70",
    category : "budget_veg"
  },

  // Expensive Pizzas veg
  {
    // monday-offer
    name:"Mexican Green Wave",
    info:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
    img:"./images/v_mexican_green_wave.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_veg"
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
    ex_cheese:"100",
    category : "prem_veg"
  },
  {
    // sat-offer
    name:"Veg Extravaganza",
    info:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    img:"./images/v_veg_extravaganza.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_veg"
  },
  // Budget pizzas non-veg
  {
    // thurs-offer
    name: "Pepper Barbecue Chicken",
    info: "Pepper barbecue chicken for that extra zing",
    img: "./images/n_pepper_barbeque_chicken.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
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
    ex_cheese:"70",
    category : "budget_nv"
  },
  {
    // fri-offer
    name:"Chicken Golden Delight",
    info:"Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    img:"./images/n_chicken_golden_delight.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
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
    ex_cheese:"70",
    category : "budget_nv"
  },
  // Expensive pizzas non-veg
  {
    // tuesday-offer
    name:"Chicken Pepperoni",
    info:"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    img:"./images/n_chickenpepperoni.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_nv"
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
    ex_cheese:"100",
    category : "prem_nv"
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
    ex_cheese:"100",
    category : "prem_nv"
  }
]

var d = new Date();
var day = d.getDay();

let offer_index,offer_day;

// 
if(day==0){
  offer_index = 1;
  offer_day = "Sunday"
}
else if(day==1){
  offer_index = 4;
  offer_day = "Monday"
}
else if(day==2){
  offer_index = 11;
  offer_day = "Tuesday"
}
else if(day==3){
  offer_index = 0
  offer_day = "Saturday"
}
else if(day==4){
  offer_index = 7;
  offer_day = "Saturday"
}
else if(day==5){
  offer_index= 9;
  offer_day = "Saturday"
}
else if(day==6){
  offer_index = 6;
  offer_day = "Saturday"
}

let offer_pizzaObj = pizzaList[offer_index];

window.onload = function(){
  let name_tag = document.getElementById("o_name");
  let info_tag = document.getElementById("info");
  let day_tag = document.getElementById("o_day");

  name_tag.innerHTML = offer_pizzaObj.name;
  info_tag.innerHTML = offer_pizzaObj.info;
  day_tag.innerHTML = offer_day+"'s Special Offer";

  window.sessionStorage.setItem("offer_index", JSON.stringify(offer_index)); 


  // CART BUBBLE
  let Cart_Li = document.getElementById("cart-li");
  let cart_items = JSON.parse(sessionStorage.getItem('cart_items'));
  let l;
  if(cart_items==null || cart_items.length==0){
    l=0;
  }
  else{
    l = cart_items.length;
  }
  console.log(l)
  Cart_Li.children[1].innerHTML = "&nbsp;"+l+"&nbsp;";
}