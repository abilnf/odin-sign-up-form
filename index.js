document.querySelectorAll("input").forEach((input) => {
  function validate(e) {
    e.target.setCustomValidity("");
    if (
      e.target.validity.valid &&
      e.target.getAttribute("id") === "confirm_password"
    ) {
      if (e.target.value !== document.querySelector("#password").value) {
        e.target.setCustomValidity("Passwords do not match!");
      }
    }

    e.target.parentElement.querySelector(".error").textContent =
      input.validationMessage;

    e.preventDefault();
  }
  input.addEventListener("invalid", validate);
  input.addEventListener("input", validate);
});
