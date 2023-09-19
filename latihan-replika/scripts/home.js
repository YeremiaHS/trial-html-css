//get element
const image = document.getElementById("input-image");

const title = document.getElementById("input-title");

const description = document.getElementById("description");

const btnSubmit = document.getElementById("button-submit");

btnSubmit.addEventListener("click", (e)=> {
  e.preventDefault();

  if (image.value === "") {
    alert("please input url image");
  }else if (title.value === "") {
    alert("please input book title");
  } else if (description.value === "") {
    alert("please input book description");
  } else {
    alert("success add book!");
  }

});

const Fullname = sessionStorage.getItem('Fullname');
const username = document.getElementById("username");
username.innerHTML = Fullname

const btnLogout = document.getElementById("button-logout")

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();

  sessionStorage.clear();
  alert("You will be logged out")
  window.location.href = "./login.html";
})