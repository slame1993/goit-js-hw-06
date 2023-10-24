const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);
  const inputLength = validationInput.value.length;

  if (inputLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
