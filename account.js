// Store Register information in the local Storage  

const registerForm = document.getElementById("registerForm");
const registerSubmitButton = document.getElementById("register-submit");

registerSubmitButton.addEventListener("click", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const userInfo = {
        username: username,
        email: email,
        password: password
    };
    if (!username || !email || !password) {
        alert("Please fill in all the fields.");
        return; 
    }

    let usersArray = JSON.parse(localStorage.getItem("usersInfo")) || [];
    usersArray.push(userInfo);
    localStorage.setItem("usersInfo", JSON.stringify(usersArray));
    const complete = document.getElementById("registration_complete");
    complete.textContent = "Registration Successfully Completed!";

    registerForm.reset();
});

// Login and Register switch functionality 
const user_container = document.querySelector("user-container");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const registerDiv = document.querySelector(".registration");
const loginDiv = document.querySelector(".login");

loginBtn.addEventListener("click" ,function(){
    registerDiv.style.display = "none";
    loginDiv.style.display ="grid";
})
registerBtn.addEventListener("click",function(){
    registerDiv.style.display ="grid"
    loginDiv.style.display  = "none";
})


// Login in functionality 

const loginSubmit = document.getElementById("login-submit");
const loginComplete = document.getElementById("login_complete");


loginSubmit.addEventListener("click", function(event) {
    event.preventDefault(); 

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    const storedUserInfoArray = JSON.parse(localStorage.getItem("usersInfo"));

    const promise = new Promise((resolve, reject) => {
        loginComplete.textContent = "Please wait, Checking your credentials...";
        setTimeout(() => {
            if (storedUserInfoArray) {
                for (let i = 0; i < storedUserInfoArray.length; i++) {
                    const userInfo = storedUserInfoArray[i];
                    if (userInfo.email === loginEmail && userInfo.password === loginPassword) {

                        resolve();
                        return; 
                    }
                }
            }
            reject("Invalid email or password. Please try again.");
            loginComplete.textContent = "";
        }, 4000); 
    });

    promise.then(() => {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "indexFinal.html";
    })
    .catch((error) => {
        alert(error);
    });
});


