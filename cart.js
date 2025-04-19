let form = document.querySelector("form");
let container = document.querySelector(".container");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("data", dataObject);
  form.reset();
  let userName = dataObject.username;
  let logMessage = `Welcome, ${userName}! You are logged in!`;
  let logInpara = document.createElement("p");
  logInpara.textContent = logMessage;
  container.appendChild(logInpara);
}
