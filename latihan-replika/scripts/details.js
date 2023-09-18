//get element

const image = document.getElementById("input-image");

const title = document.getElementById("iput-title");

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