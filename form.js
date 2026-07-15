const form = document.getElementById("register");
form.addEventListener("submit", function (event) {
  event.preventDefault()

  let firstN = document.getElementById("fn").value.trim();
let secondN= document.getElementById("sn").value.trim();
let lastN = document.getElementById("ls").value.trim();


 firstN ==="" ?  alert("PLEASE ENTER YOUR FIRST NAME") : firstN;


console.log("First name:", firstN )
console.log("Second name:", secondN )
console.log("Last name:", lastN )

const userData = {
  firstN,
  secondN,
  lastN,
}
localStorage.setItem("userDetails", JSON.stringify(userData));
console.log(userData);
let submitMessage = document.getElementById("submitmessage")

submitMessage.textContent = "Registration submitted successfully!"
submitMessage.backgroundColor = "green"
submitMessage.color = "white"


window.location.href = "usedata/index.html";











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

const passwordEye = document.getElementById("openedeye")
passwordEye.addEventListener("click",function(){
  if(password.type === "password"){

        password.type = "text";
        passwordEye.classList.replace("bi-eye-slash-fill", "bi-eye-fill");

    }else{

        password.type = "password";
        passwordEye.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
}

});

//    form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Get all the values

//     // Check the password pattern

//     if (passwordIsValid) {

//         // Show success message

//         // Save the data

//         // Redirect if you want

//     } else {

//         // Show password error

//     }
// });

// const reset = document.querySelector(".reset");
  // reset.addEventListener("click", function(event) {
  //   form.reset(); // Reset the form fields
