import navbarWithChildren from "../../navBarFinal.js";
import footerDiv from "../../footer.js";
let cartDiv = document.getElementById("cart");
let cart_total = document.getElementById('cart_total');
let count_items = JSON.parse(localStorage.getItem("count"))||0;
let checkout = document.getElementById("checkout");
let cart_length = document.getElementById('cart_length'); 
const root = document.getElementById("root");


checkout.addEventListener('click',function(){
    window.location.href = "checkout.html";
});

function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartDiv.innerHTML = "";

    cartItems.forEach(data => {
        let cartCard = createCartItem(data);
        cartDiv.appendChild(cartCard);
    });

    updateCartTotal(cartItems);
    updateCartLength(cartItems);
    localStorage.setItem("count",JSON.stringify(count_items));

}

function createCartItem(data) {
    let cartCard = document.createElement('div');
    cartCard.className = "cart_div";
    let cartImg = document.createElement('img');
    cartImg.src = data.thumbnail;
    let brandName = document.createElement("h3");
    brandName.textContent = data.brand;
    brandName.className  = "brandName";
    let cartName = document.createElement("p");
    cartName.textContent = data.title;
    let cartPrice = document.createElement('p');
    cartPrice.textContent = `₹${data.price}`;
    let removeBtn = document.createElement('button');
    removeBtn.className = "remove";
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        removeCart(cartCard);
        count_items--;
        localStorage.setItem("count",JSON.stringify(count_items));


    });

    cartCard.append(cartImg, brandName,cartName, cartPrice, removeBtn);
    return cartCard;
}

function removeCart(cartItem) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the index of the item to be removed
    let indexToRemove = cartItems.findIndex(item => item.name === cartItem.querySelector("h3").textContent);

    cartItems.splice(indexToRemove, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    cartItem.parentNode.removeChild(cartItem);
    updateCartTotal(cartItems);
    updateCartLength(cartItems);
    
    if (cartItems.length === 0) {
        localStorage.removeItem("cart");
    }


}

function updateCartTotal(cartItems) {
    let totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    cart_total.textContent = `₹ ${totalAmount.toFixed(2)}`; 
};
function updateCartLength(cartItems) {
    cart_length.textContent = cartItems.length;

};

displayCart();


root.append(footerDiv);

if (cart_length.textContent === "0") {
    cartDiv.style.height = "14rem";
}