import footerDiv from "../../footer.js";

const root = document.getElementById("root");
const checkoutBtn = document.getElementById("place-order");
const form = document.querySelector("form");
const order_msg = document.getElementById("order-message");
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let count_items = JSON.parse(localStorage.getItem("count")) || [];
const Name = document.getElementById("name");
const number = document.getElementById("number");
const address = document.getElementById("address");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (Name.value.trim() === '' || number.value.trim() === '' || address.value.trim() === '') {
        order_msg.textContent = "Please fill in all the required fields.";
    } else {
        if (count_items > 0) {
            order_msg.textContent = "Please wait...";
            try {
                await delay(3000);
                order_msg.textContent = "Your order is successfully placed";
                form.reset();
                localStorage.removeItem('cart');
                localStorage.removeItem('count');
            } catch (error) {
                console.error(error);
            }
        } else {
            order_msg.textContent = "Your Cart Is Empty! Start Shopping..";
        }
    }
});

root.append(footerDiv);
