let checkoutBtn  = document.getElementById("place-order");
let form = document.querySelector("form");
let order_msg = document.getElementById("order-message");
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let count_items = JSON.parse(localStorage.getItem("count")) || [];
let Name = document.getElementById("name");
let number = document.getElementById("number");
let address = document.getElementById("address");

form.addEventListener("submit",function(e){
    e.preventDefault();

    if (Name.value.trim() === '' || number.value.trim() === '' || address.value.trim() === '') {
        order_msg.textContent = "Please fill in all the required fields.";
    } else {
        if (count_items > 0) {
            order_msg.textContent = "Your order is successfully placed";
            form.reset();
            localStorage.removeItem('cart');
            localStorage.removeItem('count');
        } else {
            order_msg.textContent = "Your Cart Is Empty! Start Shopping..";
        }
    }
})