const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "simulation";
DOMselectors.box.insertAdjacentHTML(
  "beforebegin",
  `<h1>we are in a ${cat}</h1>`
);
DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  console.log(input);
});
