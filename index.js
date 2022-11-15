const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "name";
DOMselectors.box.insertAdjacentHTML(
  "beforebegin",
  `<h1>What is your ${cat}</h1>`
);
DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>Your name is ${input}</p>`);
DOMselectors.input.value = "";
});
