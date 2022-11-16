const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "TELLER";
DOMselectors.box.insertAdjacentHTML("beforebegin", `<h1>FORTUNE ${cat}</h1>`);
const rchoices = [
  "you will marry Andrew Tate",
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
    `<p>${input}, ${RandomChoice()}</p>`
  );
  DOMselectors.input.value = "";
});
DOMselectors.clearbtn.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.input.value = "";
});
