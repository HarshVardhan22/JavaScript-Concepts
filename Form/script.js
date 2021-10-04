const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let errorMessages = [];
  if (name.value === "" || name.value == null)
    errorMessages.push("name is required");
  if (password.value !== password2.value)
    errorMessages.push("passwords dont match");
  if (!hasUppercase(password.value))
    errorMessages.push("passwords need to have upperCase");

  if (errorMessages.length > 0) {
    e.preventDefault();
    error.innerHTML = errorMessages.join(", ");
  } else {
    sendData(name.value, password.value);
    console.log("Submitted");
  }
});

function hasUppercase(inputStr) {
  let flag = false;
  for (let i = 0; i < inputStr.length; i++) {
    let character = inputStr.charAt(i);
    if (isNaN(character) && character === character.toUpperCase()) flag = true;
  }

  return flag;
}

function sendData(name, password) {
  let formData = new FormData();
  formData.append("name", name);
  formData.append("password", password);
  fetch("api/postData", {
    method: "POST",
    body: formData
  });
  console.log("data sent");
}
