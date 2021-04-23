const pizzaList = [
  //Veg Pizzas
  {
    name:"Margherita",
    info:"Classic delight with 100% real mozzarella cheese",
    img:"./images/v_margherita.jpg",
    price:"199"
  },
  {
    name:"Cheese n Tomato",
    info:"A delectable combination of cheese and juicy tomato",
    img:"./images/v_cheese_and_tomato.jpg",
    price:"305"
  },
  {
    name:"Farmhouse",
    info:"Delightful combination of onion, capsicum, tomato & grilled mushroom",
    img:"./images/v_farmhouse.jpg",
    price_s:"215",
    price:"395",
    price_l:"595"
  },
  {
    name:"Peppy Paneer",
    info:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    img:"./images/v_peppy_paneer.jpg",
    price:"395"
  },
  {
    name:"Mexican Green Wave",
    info:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
    img:"./images/v_mexican_green_wave.jpg",
    price:"395"
  },
  {
    name:"Deluxe Veggie",
    info:"Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
    img:"./images/v_deluxe_veggie.jpg",
    price:"450"
  },
  {
    name:"Veg Extravaganza",
    info:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    img:"./images/v_veg_extravaganza.jpg",
    price:"450"
  },
  // Non Veg Pizzas
  {
    name: "Pepper Barbecue Chicken",
    info: "Pepper barbecue chicken for that extra zing",
    img: "./images/n_pepper_barbeque_chicken.jpg",
    price: "335"
  },
  {
    name:"Chicken Fiesta",
    info:"Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta",
    img:"./images/n_chicken_fiesta.jpg",
    price:"450"
  },
  {
    name:"Chicken Golden Delight",
    info:"Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    img:"./images/n_chicken_golden_delight.jpg",
    price:"450"
  },
  {
    name:"Chicken Dominator",
    info:"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka.",
    img:"./images/n_chicken_dominator.jpg",
    price:"570"
  },
  {
    name:"Chicken Pepperoni",
    info:"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    img:"./images/n_chickenpepperoni.jpg",
    price:"570"
  },
  {
    name: "Non Veg Supreme",
    info: "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken",
    img: "./images/n_non_veg_supreme.jpg",
    price: "570"
  },
  {
    name: "Tandoori Chicken Tikka",
    info: "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    img: "./images/n_tandoori_chicken_tikka.jpg",
    price: "570"
  }
]

const cardsArray = [];
var temp = "card";
let cardID = '';

window.onload = function(){

  for(let i=0;i<pizzaList.length;i++){
    cardID = temp + (i+1).toString(); 
    cardsArray.push(document.getElementById(cardID));

    cardsArray[i].children[0].src=pizzaList[i].img;;
    cardsArray[i].children[1].children[0].textContent = pizzaList[i].name;
    cardsArray[i].children[1].children[1].textContent = pizzaList[i].info;
  }
};

function sendCardID(num){

  window.location.href = './customize.html?cardID='+num;


}

// cardsArray.push(document.getElementById('card1'));

// cardsArray[0].children[0].src=pizzaList[0].img;





