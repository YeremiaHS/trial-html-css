//get element
const image = document.getElementById("input-image");

const title = document.getElementById("input-title");

const description = document.getElementById("description");

const btnSubmit = document.getElementById("button-submit");

btnSubmit.addEventListener("clicl", (e)=> {
  e.preventDefault();

  if (image.value === null) {
    alert("please input url image");
  }else if (title.value === null) {
    alert("please input book title");
  } else if (description.value === null) {
    alert("please input book description");
  } else {
    alert("success add book!");
  }

});