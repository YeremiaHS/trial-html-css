//get element
const email = document.getElementById("input-email");
console.log(email);

const password = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (e)=> {
    e.preventDefault();

    const User_data = JSON.parse(localStorage.getItem(email.value));
    console.log(User_data);

    if (email.value === "") {
        alert("please input your email");
    } else if (password.value === "") {
        alert("please input password");
    } else {
        if (User_data == null || User_data == undefined) {
            alert("User does not exist!");
        } else {
            if (email.value === User_data.Email && password.value === User_data.Password) {
                let after_data = JSON.parse(localStorage.getItem(email.value));
                after_data.Log = "Logged In";

                localStorage.setItem(email.value, JSON.stringify(after_data));
                alert("Login success!")
                window.location.href = "./home.html";
            } else if (email.value !== User_data.Email && password.value !== User_data.Password) {
                alert("Login Failed! Check your email or password")
            }
        }
    }
});