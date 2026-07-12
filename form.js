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

  const password = document.getElementById("ps")
const messageValue = document.getElementById("passwordrequirement")

password.addEventListener("input", function(event) {

const passValue = password.value;
const myPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;

if(myPasswordPattern.test(passValue)){
  messageValue.textContent = "Strong password"
  messageValue.style.backgroundColor = "green"
}else{
  messageValue.textContent ="Password must contain 8-16 characters, an uppercase letter, a lowercase letter and a number.";
  messageValue.style.backgroundColor ="red"
}



} ) ;

   

// const reset = document.querySelector(".reset");
  // reset.addEventListener("click", function(event) {
  //   form.reset(); // Reset the form fields
