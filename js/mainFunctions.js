/*
  Listeners to manage the panel class change
*/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signInButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signUpButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

/*
  function to manipulate show/hide password span
*/
function password_show_hide(i) {
  var x = document.getElementById("password-" + i);
  var show_eye = document.getElementById("show_eye-" + i);
  var hide_eye = document.getElementById("hide_eye-" + i);
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

/*
  * Form Validation handling:
  *
  * id will target our id
  * serial will target our classes [error class, success and failure icons]
  * message will print a message inside our .error class 
  *
*/

let form1 = document.getElementById("form1");
let password1 = document.getElementById("password-1");
let errorMsg = document.getElementsByClassName("error");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Nom ne peut pas être vide");
  engine(email, 1, "Email ne peut pas être vide");
  engine(password1, 2, "Mot de passe ne peut pas être vide");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
  } 
  
  else {
    errorMsg[serial].innerHTML = "";
  }
}