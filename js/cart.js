cart_items = JSON.parse(window.sessionStorage.getItem("cart_items"));



window.onload = function(){

  let Cart = document.getElementById("cart_list");
  let subTotal=0,tax,total;

  if(cart_items==null){

    Cart.innerHTML += "<br><br><p>CART IS EMPTY<p><br><br>";

  }
  else{

    // DEBUG -> Print list items
    for (i=0;i<cart_items.length;i++)
    {
    console.log(cart_items[i]);
    }


    
    // List all items on cart card
    for (i=0;i<cart_items.length;i++)
    {
      let temp = cart_items[i];

      if(temp.extra_cheese){
        temp.extra_cheese = "&nbsp; &nbsp;|&nbsp; &nbsp; Extra Cheese"
      }
      else{
        temp.extra_cheese = "";
      }

      subTotal += temp.price_each;

      Cart.innerHTML += `
        <div class="card item-card .container">
          <div class="row">
          
            <div id="item1" class="col-xs-2 col-sm-1 col-md-3 col-lg-5 col-xl-4 " >
              <img src=`+temp.img+`>
            </div>
            
            <div id="item2" class="col-xs-2 col-sm-4 col-md-6 col-lg-3">
              <h4>`+temp.name+`</h4>
              <p>`+temp.size+`&nbsp; &nbsp;|&nbsp; &nbsp;`+temp.crust+temp.extra_cheese+`</p>
              <p>Price: `+temp.price_each+`</p>
              <p>No of items: `+temp.numItems+`</p>
            </div>
            
            <div id="item3" class="col-xs-2 col-sm-3 col-md-2 " >
            <a id="remove-btn" href="#" class="btn btn-primary">Remove</a>
            </div>
          </div>
        </div>
          `
    }

    tax = (0.18) * subTotal;
    total = tax+ subTotal;

    Cart.innerHTML += `
      <div class="card item-card .container">
        <p id="end-card">
          Sub total: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;`+subTotal+`
          <br><br>
          Tax (18%): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+tax+`
          <br><br>
          Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+total+`
          <br><br>
          <a href="#" class="btn btn-primary">Place Order</a>
        </p>
      </div>
    `
  }
}