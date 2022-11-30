const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
  clearbtn: document.getElementById("clearbtn"),
  button: document.querySelectorAll(".remove"),
};
const cat = "TELLER";
DOMselectors.box.insertAdjacentHTML("beforebegin", `<h1>FORTUNE ${cat}</h1>`);
const rchoices = [
  "you will enroll in Hustlers University",
  "what color is your Bugatti???",
  "you will have thirty children",
  "you are destined for success",
];
function RandomChoice() {
  let rand = Math.random();
  let choice = Math.floor(rand * rchoices.length);
  console.log(rand, rchoices.length);
  return rchoices[choice];
}
const mike = "mike";
DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML(
    "beforeend",
    `<div id= "container><p>${input}, ${RandomChoice()}</p>
    <button class="remove" id="btn4">remove</button></div>`
  );
  DOMselectors.input.value = "";
  let container = document.getElementById("container");
  let remove = document.getElementById("btn4");
});
DOMselectors.clearbtn.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.input.value = "";
});
