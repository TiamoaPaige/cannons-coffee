let form = document.querySelector("form");
let container = document.querySelector(".container");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("data", dataObject);
  form.reset();
  let userName = dataObject.name;
  let message = `Thank you ${userName} for filing out Cannon Coffee user infomation form we will be intouch!`;
  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
