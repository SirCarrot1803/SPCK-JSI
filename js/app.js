let products = [];


fetch(`https://testapi.io/api/trietphan3103/minhHoangAPIJSI`)
    .then(response => response.json())
    .then((data) => {
        
        //   console.log(val)
        

        


        quantityInput()
        // console.log(data.data);
        products = data.data
        products.filter((items) => {
            // console.log(items.cake_id)
            if (items.type == 'mặn') {
                
                let product_card = document.createElement('div');
                product_card.classList.add('col-lg-6');
                product_card.innerHTML =
                    `<div class="d-flex h-100 product-item-js">
                        <div class="flex-shrink-0">
                            <img class="img-fluid" src="${items.image}" alt="" style="width: 150px; height: 120px;">
                            <h4 class="bg-dark text-primary p-2 m-0">${items.price}</h4>
                        </div>
                        <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                            <h5 class="text-uppercase">${items.name}</h5>
                            <span>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo</span>
                            <div  class="add-to-cart" style="display: flex; line-height: 20px">
                            <form id='myform' method='POST' class='quantity' action='#'>
                                <input type='button' value='-' class='qtyminus minus' field='quantity' />
                                <input type='text' id='quantity' value='1' class='qty' />
                                <input type='button' value='+' class='qtyplus plus' field='quantity' />
                            </form>
                            
                                <button style="height: 40px; margin: auto" id="AddToCart" data-qty="1" onclick="addToCart(event, ${items.cake_id})" class="add-to-cart-btn" >Add</button>
                            </div>
                        </div>
                    </div>`

                let productslist = document.getElementById("row-1")
                if (productslist) {
                    document.getElementById("row-1").appendChild(product_card);
            
                }
            }
            if (items.type == 'ngọt') {

                let product_card = document.createElement('div');
                product_card.classList.add('col-lg-6');
                product_card.innerHTML =
                    `<div class="d-flex h-100 product-item-js">
                        <div class="flex-shrink-0">
                            <img class="img-fluid" src="${items.image}" alt="" style="width: 150px; height: 120px;">
                            <h4 class="bg-dark text-primary p-2 m-0">${items.price}</h4>
                        </div>
                        <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                            <h5 class="text-uppercase">${items.name}</h5>
                            <span>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo</span>
                            <div  class="add-to-cart" style="display: flex; line-height: 20px">
                            <form id='myform' method='POST' class='quantity' action='#'>
                                <input type='button' value='-' class='qtyminus minus' field='quantity' />
                                <input type='text' id='quantity' value='1' class='qty' />
                                <input type='button' value='+' class='qtyplus plus' field='quantity' />
                            </form>
                            
                                <button style="height: 40px; margin: auto" id="AddToCart" data-qty="1" onclick="addToCart(event, ${items.cake_id})" class="add-to-cart-btn" >Add</button>
                            </div>
                        </div>
                    </div>`

                let productslist = document.getElementById("row-2")
                if (productslist) {
                    document.getElementById("row-2").appendChild(product_card);
                }
            }
            if (items.type == 'dẻo') {

                let product_card = document.createElement('div');
                product_card.classList.add('col-lg-6');
                product_card.innerHTML =
                    `<div class="d-flex h-100 product-item-js">
                        <div class="flex-shrink-0">
                            <img class="img-fluid" src="${items.image}" alt="" style="width: 150px; height: 120px;">
                            <h4 class="bg-dark text-primary p-2 m-0">${items.price}</h4>
                        </div>
                        <div class="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                            <h5 class="text-uppercase">${items.name}</h5>
                            <span>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo</span>
                            <div  class="add-to-cart" style="display: flex; line-height: 20px">
                            <form id='myform' method='POST' class='quantity' action='#'>
                                <input type='button' value='-' class='qtyminus minus' field='quantity' />
                                <input type='text' id='quantity' value='1' class='qty' />
                                <input type='button' value='+' class='qtyplus plus' field='quantity' />
                            </form>
                            
                                <button style="height: 40px; margin: auto" id="AddToCart" data-qty="1" onclick="addToCart(event, ${items.cake_id})" class="add-to-cart-btn" >Add</button>
                            </div>
                        </div>
                    </div>`

                let productslist = document.getElementById("row-3")
                if (productslist) {
                    document.getElementById("row-3").appendChild(product_card);
                }
            }            
        })

        // for (let items of products) {
        //     let product = localStorage.getItem("product");
        //     if (product != null) {
        //         product = JSON.parse(product)
        //     } else {
        //         product = [];
        //     }
        //     product.push({
        //         name: items.name,
        //         price: items.price,
        //         images: items.image
        //     })

        //     localStorage.setItem("product", JSON.stringify(product))
        // }
    })
function quantityInput(val){
    jQuery(document).ready(($) => {
        $(".quantity").on("click", ".plus", function (e) {
          let $input = $(this).prev("input.qty");
          val = parseInt($input.val());
          $input.val(val + 1).change();
          $(this).closest('.product-item-js').find('.add-to-cart-btn').attr('data-qty', val + 1);
        //   getVal(val+1)
        });
      
        $(".quantity").on("click", ".minus", function (e) {
          let $input = $(this).next("input.qty");
          val = parseInt($input.val());
          if (val > 0) {
            $input.val(val - 1).change();
            $(this).closest('.product-item-js').find('.add-to-cart-btn').attr('data-qty', val - 1);
        }
        //   getVal(val-1)
        });
      });

}

const addToCart = (event, key) => {
    // get item has key param
    console.log(products)
    console.log(key)
    let item = products[key-1];
    console.log(item)
    let quantity_value = event.target.getAttribute('data-qty');
    console.log(quantity_value)
    if (item){

        if(quantity_value !== 0){    
            let cart = localStorage.getItem("cart")
            if (cart == null) {
                cart = [
                    {
                        product: item,
                        quantity: quantity_value
                    }
                ];
                localStorage.setItem("cart", JSON.stringify(cart))
            } else {
                cart = JSON.parse(cart);
                for (product_item of cart) {
                    if (product_item.product.cake_id == item.cake_id) {
                        // Xử lý trùng item đã thêm vào giỏ hàng
                        product_item.quantity = parseInt(product_item.quantity) + parseInt(quantity_value);
                        localStorage.setItem("cart", JSON.stringify(cart))
                        return;
                    }
                }
                cart.push({
                    product: item,
                    quantity: quantity_value
                });
                localStorage.setItem("cart", JSON.stringify(cart))
            }
        }
    }

}



  
