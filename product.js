import footerDiv from "./footer.js";
const items = document.getElementById("allProducts");
let itemCount = document.getElementById("item_count");
let count_items = JSON.parse(localStorage.getItem("count") || 0);
const root = document.getElementById("root");

let API_URL = 'https://dummyjson.com/products';

async function getData(URl){
    try {
        let rawData = await fetch(URl);
        let finalData = await rawData.json();
        return finalData.products;
    } catch (error) {
        console.log(error);
    }
}

function displayData(productList){
    productList.forEach(products => {
        
        let productCard = document.createElement("div");
        productCard.className = "card-div";
        let productImg = document.createElement('img');
        productImg.src = products.thumbnail;
        let brandName = document.createElement("h3");
        brandName.textContent = products.brand;
        let productName = document.createElement("p");
        productName.textContent = products.title;
        let productPrice = document.createElement("p");
        productPrice.textContent =`₹${products.price}` ;
        let cartBtn = document.createElement("button");
        cartBtn.className = "addToCart";
        cartBtn.textContent = "Add to cart";
        cartBtn.addEventListener('click',function(){
            alert("Added to Cart!")
        })
        itemCount.textContent = count_items;
        cartBtn.addEventListener("click", function () {
            addToCart(products);
            count_items++;
            localStorage.setItem("count", JSON.stringify(count_items));
            itemCount.textContent = count_items;

        });


        productCard.append(productImg,brandName,productName,productPrice,cartBtn);
        items.append(productCard);
    });
}
function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

async function call(){
    try {
        let productData = await getData(API_URL) ;
        displayData(productData);
    } catch (error) {
        console.log(error);
    }
}
call();

root.append(footerDiv);