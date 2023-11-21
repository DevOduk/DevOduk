var navlistItems = document.querySelectorAll(".navlist");
navlistItems.forEach(function(navlistItem){
    navlistItem.classList.remove("active")
    navlistItem.addEventListener("click", (e)=>{
        console.log("Link = "+ navlistItem.textContent)
        if (!navlistItem.textContent) {
            console.log("True")
            navlistItem.classList.remove("active")
        } else {
            console.log("False")
            navlistItem.classList.add("active")
        }
    })
})



var menu = document.getElementById("menuList");
menu.style.transition = ".4s ease-in-out";
    function CloseMenu() {
        menu.style.left = "-500px";
    }
    function OpenMenu() {
        if (menu.style.left == "0px") {
            menu.style.left = "-500px";            
        } else {
        menu.style.left = "0px";
        }
    }
var State = false;
var slash = document.getElementsByClassName("fa-slash");



var modeName = document.querySelector("#ClickforDark span");
modeName.textContent = "Dark Mode";
var dark = document.getElementById("darkModeSwitcher");
dark.setAttribute("title", "Turn on dark mode");
dark.addEventListener("click", () => {
    if (dark.classList.contains("fa-moon")) {
        dark.style.color = "white";
        modeName.textContent = "Light Mode";

        dark.classList.remove("fa-moon");
        dark.classList.add("fa-sun");
        dark.setAttribute("title", "Turn on light mode");
        document.documentElement.style.setProperty('--primary-text', 'white');
        document.documentElement.style.setProperty('--primary-background', 'black');
    } else {
        dark.style.color = "black";
        modeName.textContent = "Dark Mode";

        dark.classList.remove("fa-sun");
        dark.classList.add("fa-moon");
        dark.setAttribute("title", "Turn on dark mode");
        document.documentElement.style.setProperty('--primary-text', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--primary-background', 'rgb(255, 255, 255)');
    }
});




function Password() {
    var passwordInput = document.getElementById("password");
    if (State) {
        passwordInput.setAttribute("type", "password");
        State = false;
    } else {
        passwordInput.setAttribute("type", "text");
        State = true;
        slash.style.opacity = "1";
    }
}
function Password5() {
    var input1 = document.getElementById("password5");
    
    if (State) {
        input1.setAttribute("type", "password");
        State = false;
    } else {
        input1.setAttribute("type", "text");
        State = true;
    }
}
function Password2() {
    var passwordInput2 = document.getElementById("password2");
    if (State) {
        passwordInput2.setAttribute("type", "password");
        State = false;
    } else {
        passwordInput2.setAttribute("type", "text");
        State = true;
    }
}

    function CloseForm(){
        var form = document.getElementById("formContainer");
        form.style.opacity = "0";
        setTimeout(function() {
        form.style.display = "none";
    }, 1000);
    }
    


var form = document.getElementById("formContainer");
var messageBtn = document.getElementById("message").addEventListener("click", (e) =>{
    if (form.style.display != "block") {
        form.style.transition = "opacity 1s ease";
        form.style.opacity = "0";
        form.style.display = "block";
        setTimeout(() => {
            form.style.opacity = "1";
        form.style.display = "block";
        }, 100);
    } else {
        form.style.opacity = "0";
        form.style.transition = "opacity 1s ease";
        form.style.display = "none";
    }
});


var nav = document.getElementById("Navigatio");
var navp = document.getElementById("popuppolicies");
function ToggleNav() {
    nav.style.bottom = "-60vh";
    navp.style.opacity = "1";
        navp.style.top = "50%";
}
setTimeout(() => {
    nav.style.bottom = "10px";
}, 3000);
function ToggleCookiesNav() {
    nav.style.bottom = "-60vh";
}

function TogglePolicies() {
    navp.style.top = "-130vh";
    navp.style.opacity = "0";
}
 function CloseCookiePolicies() {
    var confirmed = document.getElementById("confirmed");
    navp.style.top = "-130vh";
    navp.style.opacity = "0";
    setTimeout(function() {
        confirmed.style.display = "block"
        }, 400);
    
}

function CloseCookiePolicies() {
    var navp = document.getElementById("popuppolicies");
    var confirmed = document.getElementById("confirmed");
    navp.style.top = "-130vh";
    navp.style.opacity = "0";

    setTimeout(function() {
        navp.style.opacity = "0"; // Fade out the popup
        confirmed.style.display = "block";
        confirmed.style.transform = "scale(1)"; // Display the confirmation

        setTimeout(function() {
            confirmed.style.display = "none"; // Hide the confirmation
            navp.style.display = "none"; // Hide the popup
            navp.style.opacity = "1"; // Reset opacity for next display
        }, 2100); // 3000 milliseconds = 3 seconds for confirmation display
    }, 400); // 3000 milliseconds = 3 seconds for popup display
}



var now = new Date();
var hours = now.getHours();
var greetingElement = document.getElementById("greeting");

setTimeout(function(){
    if (hours >= 0 && hours < 12) {
    greetingElement.textContent = "Good Morning!🥰";
} else {
    greetingElement.textContent = "Good Evening!🥰";
} 
    }, 0);






const arrowUp = document.querySelector('.ArrowUp');
arrowUp.style.opacity = '0';
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the scroll position to show the element when halfway to the bottom
    const halfwayPosition = documentHeight - windowHeight - windowHeight / .3;

    // Toggle the visibility of the element
    if (scrollPosition >= halfwayPosition) {
        arrowUp.style.opacity = '1';
    } else {
        arrowUp.style.opacity = '0';
    }
});

// send message to email
var btnsend = document.querySelector(".btnsend");
var sendmsgcontainer = document.querySelector(".sendMessage")
btnsend.addEventListener("click", (e) => {
    e.preventDefault();

         var name = document.getElementById("senderName").value.trim();
         var email = document.getElementById("senderEmail").value.trim();
         var message = document.getElementById("senderMessage").value.trim();
         if(name == "" || email == ""){
             alert("Please enter a valid email address or name!")
         } else  {
             if (message == ""){
             alert("Please enter a message to send");
             } else {
             alert("Message sent successfully!");
             console.log("Name - " + name);
             console.log("Email - " + email);
             console.log("Message - " + message);

             setTimeout(() => {
                document.getElementById("senderName").value = "";
                document.getElementById("senderEmail").value = "";
                document.getElementById("senderMessage").value = "";


                sendmsgcontainer.innerHTML = `Congratulatuons! Your message has been sent successfully! I will gwt back to you promptly. Holla at me on all social media platforms for a chat 🤗<br>
                <a href="https://github.com/DevOduk/DevOduk.git">View my GitHub</a>`;
                sendmsgcontainer.style.color  = "green";
                sendmsgcontainer.style.display  = "flex";
                sendmsgcontainer.style.flexDirection  = "column";
                sendmsgcontainer.style.lineHeight  = "1.5";
                sendmsgcontainer.style.textAlign  = "center";
                sendmsgcontainer.style.alignItems  = "center";
                sendmsgcontainer.style.justifyContent  = "center";
             }, 200);
             }
         };

        
});