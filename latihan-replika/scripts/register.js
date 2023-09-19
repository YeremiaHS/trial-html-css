const username = document.getElementById("input-username");

const fullname = document.getElementById("input-fullname");

const email = document.getElementById("input-email");

const password = document.getElementById("input-password");

const registerBtn = document.getElementById("btn-register");

registerBtn.addEventListener("click", (e)=> {
    e.preventDefault();

    let checkKey = null;

    if (username.value === "") {
        alert("please input username");
    } else if (fullname.value === "") {
        alert("please input your fullname");
    } else if (email.value === "") {
        alert("please input your email");
    } else if (password.value === "") {
        alert("please input your password");
    } else {
        
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (email.value === key) {
                checkKey = "Yes";
                break;
            };
        };
    
        if (checkKey !="Yes" || checkKey == null) {
            console.log("Entered");
    
            const user_data = {
                Username : `${username.value}`,
                Fullname : `${fullname.value}`,
                Email : `${email.value}`,
                Password : `${password.value}`
            }
    
            localStorage.setItem(`${email.value}`, `${JSON.stringify(user_data)}`);
    
            alert("Success register");
    
            window.location.href = "./login.html";
        } else {
            console.log("No");
    
            alert("Account already exist!");
        }
    }
})