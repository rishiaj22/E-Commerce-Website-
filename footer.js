
const footerDiv = document.createElement('div');
footerDiv.className  = "footerDiv";

const leftDiv = document.createElement("div");
leftDiv.className = "leftDiv";
const footerLogo = document.createElement("div");
footerLogo.className = "footerLogo";
const logoImg = document.createElement("img");
logoImg.src = "images/logoImg.png"
footerLogo.append(logoImg);
const footerContact = document.createElement('div');
footerContact.className="footerContact";
const contactHeading = document.createElement("h3");
contactHeading.textContent =  "Contact";
const address  = document.createElement("p");
address.textContent = "Address: Sage University,Indore";
const phone = document.createElement("p");
phone.textContent = "Phone: +917828244760, +89345678945";
const hours = document.createElement("p");
hours.textContent = "Hours: 10:00-18:00 Mon-Sat";

footerContact.append(contactHeading,address,phone,hours);

leftDiv.append(footerLogo,footerContact);

// Right Div
const rightDiv = document.createElement("div");
rightDiv.className = "rightDiv";

// About List
const about = document.createElement("div");
about.className = "about";
const aboutHeading = document.createElement("h3");
aboutHeading.textContent = "About";
const li1 = document.createElement("li");
const aboutUs = document.createElement('a');
aboutUs.textContent = "About Us";
aboutUs.href = "#";
li1.append(aboutUs);

const li2 = document.createElement("li");
const deliveryInfo = document.createElement("a");
deliveryInfo.textContent = "Delivery Information";
deliveryInfo.href = "#";
li2.append(deliveryInfo);

const li3 = document.createElement("li");
const policy = document.createElement("a");
policy.textContent = "Privacy Policy";
policy.href  = "#";
li3.append(policy);

const li4 = document.createElement('li');
const contactUs = document.createElement("a");
contactUs.textContent = "Contact Us";
contactUs.href= "#";
li4.append(contactUs);

about.append(aboutHeading,li1,li2,li3,li4);

// My Account 
const myAccount = document.createElement("div");
const accountHeading = document.createElement("h3");
accountHeading.textContent = "My Account";

const accountLi1 = document.createElement("li");
const sigin = document.createElement('a');
sigin.textContent = "Sign In";
sigin.href = "#";
accountLi1.append(sigin);

const accountLi2 = document.createElement("li");
const login = document.createElement("a");
login.textContent = "Login";
login.href  = "#";
accountLi2.append(login);

const accountLi3 = document.createElement("li");
const viewCart = document.createElement("a");
viewCart.textContent = "View Cart";
viewCart.href = "#";
accountLi3.append(viewCart);

const accountLi4 = document.createElement("li");
const help = document.createElement("a");
help.textContent = "Help";
help.href  = "#";
accountLi4.append(help);

myAccount.append(accountHeading,accountLi1,accountLi2,accountLi3,accountLi4);

const follow = document.createElement("div");
follow.className = "follow";
const followHeading = document.createElement("h3");
followHeading.textContent = "Follow Us";
const twitter = document.createElement("a");
twitter.href = "https://twitter.com/Rishiraj_Sh";
const twitterImg = document.createElement("img");
twitterImg.src = "images/icons8-twitter-50.png";
twitter.append(twitterImg);
const mail = document.createElement("a");
mail.href = "mailto:shrivastavarishiraj198@gmail.com";
const mailImg = document.createElement("img");
mailImg.src = "images/icons8-mail-48.png";
mail.append(mailImg);

const linkdin = document.createElement("a");
linkdin.href  = "https://www.linkedin.com/in/rishiraj-shrivastava-98742b266/";
const linkdinImg = document.createElement("img");
linkdinImg.src = "images/icons8-linkedin-94.png";
linkdin.append(linkdinImg);

const instagram = document.createElement("a");
instagram.className = "instagram";
instagram.href = "#";
const instagramImg= document.createElement("img");
instagramImg.src = "images/icons8-instagram-48.png";
instagram.append(instagramImg);

const copyRight = document.createElement('p');
copyRight.className = "copyRight";
copyRight.textContent  = "\u00A9 2024 Your Company Name. All rights reserved."
follow.append(followHeading,twitter,mail,linkdin,instagram,copyRight);



rightDiv.append(about,myAccount,follow);

footerDiv.append(leftDiv,rightDiv);


export default footerDiv;   