function validatePassword() {
  var passwordInput = document.getElementById("password");
  var confirmationInput = document.getElementById("confirmPassword");
  var password = passwordInput.value;
  var confirmPassword = confirmationInput.value;

  // Regular expression to validate password
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Check if the password matches the pattern
  if (!passwordRegex.test(password)) {
    passwordInput.setCustomValidity(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
    );
  } else {
    passwordInput.setCustomValidity("");
  }

  if (password !== confirmPassword) {
    confirmationInput.setCustomValidity("Password does not matche");
  } else {
    confirmationInput.setCustomValidity("");
  }
}

document
  .getElementById("submit_form")
  .addEventListener("click", validatePassword);
