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