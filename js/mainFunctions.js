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
let password_show_hide = (i) => {
  let x = document.getElementById("password-" + i);
  let show_eye = document.getElementById("show_eye-" + i);
  let hide_eye = document.getElementById("hide_eye-" + i);
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
  * serial will target our error class
  * message will print a message inside our .error class 
  *
*/

let form1 = document.getElementById("form1");
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let errorMsg = document.getElementsByClassName("error");
const passReg = new RegExp("(?=.*?[#?!@$%^&*-])");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(username, 0, "Nom ne peut pas être vide");
  engine(email, 1, "Email ne peut pas être vide");
  engine(password1, 2, "Minimum 8 caractères dont 1 caractère spécial");
  engine(password2, 3, "Mot de passe différent");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "" && id != password2) {
    errorMsg[serial].innerHTML = message;
  } 
  
  else {
    if (id == password1 && (password1.value.length <= 7 || !(passReg.test(password1.value)))) {
      errorMsg[serial].innerHTML = message;
    }
    else {
      if (id == password2 && password2.value != password1.value) {
        errorMsg[serial].innerHTML = message;
      }
      else {
        errorMsg[serial].innerHTML = "";
      }      
    }
  }
}
