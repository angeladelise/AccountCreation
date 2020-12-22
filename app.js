let form = document.querySelector(".form");
let username = document.querySelector(".form__username");
let password = document.querySelector(".form__password");

form.addEventListener("submit", checkForm);

function checkForm(e) {
  e.preventDefault();

  usernameValue = username.value.trim();
  passwordValue = password.value.trim();

  if (usernameValue === "") {
    showError(username, "Enter a username");
  } else {
    showSuccess(username);
  }

  if (passwordValue === "") {
    showError(password, "Enter a password");
  } else {
    showSuccess(password);
  }
}

function showError(input, errorMessage) {
  let formGroup = input.parentElement;
  formGroup.classList.add("form__error");
  let message = formGroup.querySelector(".form__message");
  message.innerText = errorMessage;
}

function showSuccess(input) {
  let formGroup = input.parentElement;
  formGroup.classList.remove("form__error");
  formGroup.classList.add("form__success");
}
