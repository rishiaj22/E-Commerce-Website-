let itemDiv = document.getElementById("items");
let itemCount = document.getElementById("item_count");
let count_items = JSON.parse(localStorage.getItem("count")||0);

function  DisplayItem(productItems){
    localStorage.setItem('items',JSON.stringify(productItems));
    let itemList = JSON.parse(localStorage.getItem("items"));
    const finalItemList = itemList.products;

    finalItemList.forEach(products => {
        let itemCard = document.createElement('div');
        itemCard.className = "item";
        let itemImg = document.createElement('img');
        let itemName = document.createElement("h3");

        itemName.textContent = products.title;
        itemImg.src = products.thumbnail;
        let itemPrice = document.createElement('p');
        itemPrice.textContent    = products.price;
        let cartBtn = document.createElement("button");
        cartBtn.className =  "add_to_cart";
        cartBtn.textContent = "Add to cart";
        itemCard.append(itemImg,itemName,itemPrice,cartBtn);
        itemDiv.append(itemCard); 

        cartBtn.addEventListener("click",function(){
            addToCart(products);
            count_items++;
            localStorage.setItem("count",JSON.stringify(count_items));
            itemCount.textContent = count_items;
            
        })
    });
};


function addToCart(item){
    let cartItems = JSON.parse(localStorage.getItem("cart"))||[];
    cartItems.push(item);
    localStorage.setItem("cart",JSON.stringify(cartItems));
}

itemCount.textContent = count_items;

fetch('https://dummyjson.com/products')
.then(function(items){
    return items.json();
})
.then(function(itemLists){
    DisplayItem(itemLists);
})

import navbarWithChildren from "./navBar.js";

