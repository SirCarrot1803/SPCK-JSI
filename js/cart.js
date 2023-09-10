function getCake(CakeItem){
    console.log(CakeItem)
    let content = document.getElementById("render-cart-book");
    CakeItem.map((item) =>{
        console.log(item);
        let item_tr = document.createElement("tr");
        item_tr.setAttribute("style","font-size: 23px")
        item_tr.innerHTML =`
                <td class="table-product-cart__product-column">
                <div class="product">
                    <div class="product__image">
                    <img style="height: 200px" class="img-fluid" src="${item.product.image}" alt="">
                    </div>
                    <div class="product__content">
                    <p>
                        <strong class="h3">${item.product.name}</strong><br>
                    </p>
                    </div>
                </div>
                </td>
                <td class="table-product-cart__price-column">
                <span class="table-product-cart__thead-sm">${item.product.price} VND</span>
                
                </td>
                <td class="table-product-cart__quantity-column" style ="text-align:center; ">
                <label for="product-quantity-22513575" class="table-product-cart__thead-sm"></label>
                ${item.quantity}
                </td>
                <td class="table-product-cart__total-column">
                <span class="table-product-cart__thead-sm"></span>
                ${item.product.price * item.quantity}.000 VND
                </td>
                <td class="table-product-cart__addition-column">
                <span class="sr-only">The product isn't available.</span>
                </td>`;
        content.appendChild(item_tr)
    });
}
function CompletePayment() {
    let cart = localStorage.getItem("cart");

    if (cart !== null) {
        notice();
        localStorage.removeItem("cart");
        setTimeout(function(){
            location.reload();
        }, 2000);
          
          
      } else {
        location.reload();
      }
  }
function Delete() {
    let cart = localStorage.getItem("cart");

    if (cart !== null) {
        localStorage.removeItem("cart");
        location.reload();  
      } else {
        location.reload();
      }
}

function CountTotal(cakes) {
    const subtotal = document.getElementById("subtotal");
    const total = document.getElementById("total");
    let totals = 0;
    cakes.map((item) => {
        totals += item.quantity * item.product.price;
    });
    totals = Math.round(totals * 100) / 100;
    console.log(totals);

    subtotal.innerHTML = totals + " 000 VND";
    total.innerHTML = totals + " 000 VND";
}

function notice() {
    console.log("hello")
    const noti = document.createElement("p");
    noti.innerText = "*Payment successful";
    document.getElementById("noti-mess").appendChild(noti);
    noti.style.color = 'green';
    noti.style.fontSize = '20px';
  }

function run(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    if (cart) {
        getCake(cart);
        CountTotal(cart);
    }
}

run()