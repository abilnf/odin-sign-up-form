document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", (e) => {
    e.preventDefault();
  });
});
