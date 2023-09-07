const textInput = document.getElementById("validation-input");

  textInput.addEventListener("blur", () => {
    const inputValue = textInput.value.trim();
    const acceptLength = parseInt(textInput.getAttribute("data-length"), 10);

    if (inputValue.length === acceptLength) {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
    } else {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
    }
  });