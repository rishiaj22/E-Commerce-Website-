const navBar = document.getElementById("navbar");

const leftDiv = document.createElement("div");
leftDiv.className = "left_nav";
let logo = document.createElement("img");
logo.className = "logo_div";
logo.src = "images/logo.jpg";
let logo_name = document.createElement('h3');
logo_name.textContent = "Elevate";
logo_name.className = "logo_name";
leftDiv.append(logo,logo_name);

// Search section in the nav bar
const search = document.createElement("div");
search.className = "searchDiv";
const search_input = document.createElement("input");
search_input.className  = "title_input";
search_input.placeholder = "Search....."
const searchIcon = document.createElement("i");
searchIcon.className= 'fa-solid fa-magnifying-glass';
search.append(search_input,searchIcon);

// Right portion 
let rightDiv = document.createElement("div");
rightDiv.className = "right_nav";
let home_link = document.createElement("a");
home_link.textContent = "Home";
home_link.href = "indexFinal.html"
let account = document.createElement("a");
account.textContent = "My Profile";
account.href= "#";
let all_products = document.createElement("a");
all_products.textContent = "Products";
all_products.href= "product.html";
const cart = document.createElement("a");
cart.className = "cart";
const cartImg = document.createElement("img");
cartImg.src = "images/icons8-cart-100.png";
cart.append(cartImg);
cart.href ="cart.html";
const countDiv = document.createElement("div");
countDiv.id = "item_count";
countDiv.textContent = 0;

// Side Nav Bar
const sub_right = document.createElement("div");
sub_right.className = "sub_right";
const bar = document.createElement("i");
bar.className = "fa-solid fa-bars";
// Side bar div
const side_bar_section = document.createElement("div");
side_bar_section.className = "sideNav_section";
const ul = document.createElement("ul");
ul.className = "side_ul";

const li1 = document.createElement("li");
const side_home = document.createElement("a");
side_home.href = "index.html";
side_home.textContent= "Home";
li1.append(side_home);

const li2 = document.createElement("li");
const side_account = document.createElement("a");
side_account.href = "#";
side_account.textContent = "Account";
li2.append(side_account);
side_bar_section.append(li1,li2);
sub_right.append(bar,side_bar_section);


rightDiv.append(home_link,account,all_products,cart,countDiv);
navBar.append(leftDiv,search,rightDiv,sub_right)

// Side Nav button Working
const nav_button = document.querySelector(".fa-bars");
const sub_nav = document.querySelector(".sideNav_section");

nav_button.addEventListener("click", function() {
    sub_nav.classList.toggle("active");
});
const navbarWithChildren = {
    navBar: navBar,
    logo: logo,
    countDiv: countDiv,
    home_link: home_link,
    account:account
};


// NavBar Scroll Behaviour 
var lastScrollTop = 0;
var navbar = document.getElementById('navbar');
var threshold = 200;
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > threshold) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


export default navbarWithChildren;
