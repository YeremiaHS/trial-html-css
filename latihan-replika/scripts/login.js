//get element
const email = document.getElementById("input-email");
console.log(email);

const password = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (e)=> {
    e.preventDefault();

    if (email.value === "yeremiah@gmail.com") {
        if (password.value === "12345678") {
            alert("Success Login!");
            window.location.href = "./home.html";
        } else {
            alert("Wrong password!");
        }
    } else {
        alert("Wrong email!")
    }
});