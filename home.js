import footerDiv from "./footer.js";

// Front Banner
const bannerDiv = document.createElement("div");
bannerDiv.id= "banner_div";
const bannerImg = document.createElement("img");
bannerImg.src = "images/banner.png";

bannerDiv.append(bannerImg);

// Create Serices div
const service_section = document.createElement("section");
service_section.className = "service_section";

const service_div1 = document.createElement("div");
const service_img1 = document.createElement("img");
service_img1.src = "images/services/shippinh.png"
const service_content_div1 = document.createElement("div");
service_content_div1.className = "service_content";
service_content_div1.id = "shipping";
const service_content_p1 = document.createElement('p');
service_content_p1.textContent = "Free Shipping";
service_content_div1.append(service_content_p1);
service_div1.append(service_img1,service_content_div1);

const service_div2 = document.createElement("div");
const service_img2 = document.createElement("img");
service_img2.src = "images/services/online.png";
const service_content_div2 = document.createElement("div");
service_content_div2.className = "service_content";
service_content_div2.id = "online";
const service_content_p2 = document.createElement('p');
service_content_p2.textContent = "Online Order";
service_content_div2.append(service_content_p2);
service_div2.append(service_img2,service_content_div2);

const service_div3 = document.createElement("div");
const service_img3= document.createElement("img");
service_img3.src = "images/services/save.png";
const service_content_div3 = document.createElement("div");
service_content_div3.className = "service_content";
service_content_div3.id = "money";
const service_content_p3 = document.createElement('p');
service_content_p3.textContent = "Save Money";
service_content_div3.append(service_content_p3);
service_div3.append(service_img3,service_content_div3);

const service_div4 = document.createElement("div");
const service_img4= document.createElement("img");
service_img4.src = "images/services/promotions.png";
const service_content_div4 = document.createElement("div");
service_content_div4.className = "service_content";
service_content_div4.id = "promotions";
const service_content_p4 = document.createElement('p');
service_content_p4.textContent = "Promotions";
service_content_div4.append(service_content_p4);
service_div4.append(service_img4,service_content_div4);

const service_div5 = document.createElement("div");
const service_img5= document.createElement("img");
service_img5.src = "images/services/support.png";
const service_content_div5 = document.createElement("div");
service_content_div5.className = "service_content";
service_content_div5.id = "support";
const service_content_p5 = document.createElement('p');
service_content_p5.textContent = "24/7 Support";
service_content_div5.append(service_content_p5);
service_div5.append(service_img5,service_content_div5);


service_section.append(service_div1,service_div2,service_div3,service_div4,service_div5);

// Laptop Banner
const laptopBanner = document.createElement("div");
laptopBanner.id = "laptop_banner";
const laptop_img = document.createElement("img");
laptop_img.src = "images/laptop banner.webp";
laptopBanner.append(laptop_img);


// Displaying the items
const itemDiv = document.getElementById("items");

const featuredProductDiv = document.createElement("div");
featuredProductDiv.id = "featuredMainDiv";

const featuredProducts  = document.createElement("div");
featuredProducts.id = "featuredProducts";
const featuredProductHeading = document.createElement("h2");
featuredProductHeading.textContent = "Featured Proudcts";


function DisplayItems(itemsData,individualDiv) {

    itemsData.forEach(item => {
        let itemCard = document.createElement('div');
        itemCard.className = "item";

        let itemImg = document.createElement('img');
        itemImg.src = item.imageSrc;

        let itemBrand = document.createElement("h4");
        itemBrand.textContent = item.brand;

        let itemName = document.createElement('p');
        itemName.textContent = item.title;

        let itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.className = "laptop_price";

        let moreBtn = document.createElement("button");
        moreBtn.textContent ="more..";
        moreBtn.className = "moreBtn";

        itemCard.append(itemImg, itemBrand,itemName, itemPrice,moreBtn);
        individualDiv.append(itemCard);
    });
}

featuredProductDiv.append(featuredProductHeading,featuredProducts);



// Laptops
const itemsData = [
    { brand: "Apple", title:"MacBook Pro", imageSrc: "https://cdn.dummyjson.com/product-images/6/thumbnail.png", price: "₹1,7499" },
    { brand: "Samsung",title:"Samsung Galaxy Book", imageSrc: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg", price: "₹80,499" },
    { brand: "Microsoft Surface",title:"Microsoft Surface Laptop 4", imageSrc: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg", price: "₹90,995" },
    { brand: "Infinix", title:"Infinix INBOOK", imageSrc: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg", price: "₹39,895" },

];
DisplayItems(itemsData,featuredProducts);


// Skin care banner 
const skinBanner = document.createElement("div");
skinBanner.id = "skinCare_banner";
const skinCare_img = document.createElement("img");
skinCare_img.src = "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F27ce8c7e-27b4-4114-8eb8-2257ef5bf143.jpg&w=1920&q=75";
skinBanner.append(skinCare_img);

// SkinCares data
const skinCareData = [
    { brand: "L'Oreal Paris", title: "Hyaluronic Acid Serum", imageSrc: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg", price: "₹999" },
    { brand: "Suger", title: "Matte As Hell Crayon Lipstick ", imageSrc: "https://cdn.shopify.com/s/files/1/0906/2558/files/554408657-wedding-makeup-kit-revamp_1.jpg?v=1700475948", price: "₹999" },
    { brand: "Nykka", title: "Skin Product 6", imageSrc: "https://images-static.nykaa.com/uploads/095c90fd-55b4-44c2-91b8-9335b5b0ec30.jpg?tr=w-600,cm-pad_resize", price: "₹1,049" },
    { brand: "Nykka", title: "Lipstick", imageSrc: "https://images-static.nykaa.com/media/catalog/product/6/8/68b8f74MACXX00001310_1.jpg?tr=w-344,h-344,cm-pad_resize", price: "₹3,034" },

];

const skinCareBg = document.createElement("div");
skinCareBg.className = "skinCareBg";
const skinCareDiv = document.createElement("div");
skinCareDiv.className = "skinCareProducts";
skinCareBg.append(skinCareDiv);

DisplayItems(skinCareData,skinCareDiv);

// Clothings
const clothsBanner  = document.createElement("div");
clothsBanner.id = "clothBanner"
const clothImg = document.createElement("img");
clothImg.src = "https://images.bewakoof.com/uploads/grid/app/Tshirt-under-399-Blockbuster-deal-Thin-Strip-Desktop-banner--1--1709119747.jpg";
clothsBanner.append(clothImg);

const ClothData = [
    { brand: "Vintage Apparel", title: "Full Sleeves t-shirt", imageSrc: "https://images.bewakoof.com/t320/men-s-black-t-shirts-1094-1708612740-1.jpg", price: "₹999" },
    { brand: "The Warehouse", title: "Half sleeves t-shirts ", imageSrc: "https://images.bewakoof.com/t320/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg", price: "₹699" },
    { brand: "Peter England", title: "Sleeve less t-shirt", imageSrc: "https://images.bewakoof.com/t320/jet-black-vest-210687-1659522847-5.jpg", price: "₹1,049" },
    { brand: "Vintage Apparel", title: "Half sleeves t-shirts", imageSrc: "https://images.bewakoof.com/t320/women-s-black-boyfriend-t-shirt-103943-1655747757-5.jpg", price: "₹1,024" },
    { brand: "The Warehouse", title: "Half sleeves t-shirts", imageSrc: "https://images.bewakoof.com/t320/women-s-black-boyfriend-t-shirt-103943-1655747735-1.jpg", price: "₹777" },

];
const clothDiv = document.createElement("div");
clothDiv.className = "clothDiv";

const clothItemsContainer = document.createElement("div");
clothItemsContainer.className = "clothItemsContainer";

DisplayItems(ClothData, clothItemsContainer);
clothDiv.appendChild(clothItemsContainer);

// Slider Section Content
const shopNow = document.createElement("div");
shopNow.id = "shopNow";
const shopNow_content = document.createElement("h1");
shopNow_content.textContent ="New collection for ";
const shopNow_contentSpan = document.createElement("span");
shopNow_contentSpan.textContent = "Everyone!";
const shopNow_Btn = document.createElement("button");
shopNow_Btn.textContent = "Login/Sign";
shopNow_Btn.addEventListener('click',function(){
    window.location.href = "accountPage.html";
})
shopNow_Btn.className = "shopBtn";
shopNow_Btn.id = "shopNowBtn";
shopNow_content.append(shopNow_contentSpan);
shopNow.append(shopNow_content,shopNow_Btn);
// Slider Section
const slider_section = document.createElement("section");
slider_section.id = "slider_section";

const slider_outerDiv = document.createElement("div");
slider_outerDiv.id = "slider_outerDiv";

const sliderImg1 = document.createElement("img");
sliderImg1.className = "sliderImg";
sliderImg1.src = "https://images.bewakoof.com/uploads/grid/app/Midsize-Desktop-Banner-Character-Accessories-1700203060.jpg";

const sliderImg2 = document.createElement("img");
sliderImg2.className = "sliderImg";
sliderImg2.src = "https://images.bewakoof.com/uploads/grid/app/Midsize-Desktop-Banner-Customise-1700203061.jpg";

const sliderImg3 = document.createElement("img");
sliderImg3.className = "sliderImg";
sliderImg3.src = "https://images.bewakoof.com/uploads/grid/app/DESKTOP---MID-SIZE-BANNER-AVATAR-1708668353.png";

const sliderImg4 = document.createElement("img");
sliderImg4.className = "sliderImg";
sliderImg4.src = "https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp";

slider_outerDiv.append(sliderImg1, sliderImg2, sliderImg3, sliderImg4);

slider_section.append(slider_outerDiv,shopNow);
document.body.append(slider_section);

const sliderImages = document.querySelectorAll(".sliderImg");
let currentIndex = 0;

// Automatically slide after a delay
function autoSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlide();
}

// Update the slide based on the current index
function updateSlide() {
    sliderImages.forEach((image, index) => {
        image.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(() => {
    autoSlide();
}, 2000);

// Trigger the slide transition when the current transition ends
sliderImages.forEach((image) => {
    image.addEventListener("transitionend", () => {
        setTimeout(autoSlide, 2000); 
    });
});



itemDiv.append(bannerDiv, service_section, laptopBanner, featuredProductDiv, skinBanner, skinCareBg, clothsBanner, clothDiv,slider_section,footerDiv);
export default itemDiv;


