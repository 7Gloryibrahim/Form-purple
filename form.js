const form = document.getElementById("register");
form.addEventListener("submit", function (event) {
  event.preventDefault()

  let firstN = document.getElementById("name").value.trim();
let secondN= document.getElementById("sn").value.trim();
let lastN = document.getElementById("ls").value.trim();


 firstN ==="" ?  alert("PLEASE ENTER YOUR FIRST NAME") : firstN;


console.log("First name:", firstN )
console.log("Second name:", secondN )
console.log("Last name:", lastN )

const userData = JSON.parse(localStorage.getItem("userDetails"));

document.getElementById("display").innerHTML = `
First Name: ${userData.firstN} <br>
Second Name: ${userData.secondN} <br>
Last Name: ${userData.lastN}
`;

}); // Prevent form submission

  

   

// const reset = document.querySelector(".reset");
  // reset.addEventListener("click", function(event) {
  //   form.reset(); // Reset the form fields
