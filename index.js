const DOMselectors = {
  clickbutton: document.getElementById("clickbtn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
  clearbtn: document.getElementById("clearbtn"),
  button2: document.querySelectorAll(".remove"),
  container: document.getElementById("container"),
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

DOMselectors.clickbutton.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML(
    "beforeend",
    `<div id= "container"><p>${input}, ${RandomChoice()}</p>
    <button class="remove"">remove</button></div>`
  );
  DOMselectors.input.value = "";
  let container = document.getElementById("container");
  container.addEventListener("click", function () {
    container.remove();
  });
});

DOMselectors.clearbtn.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.input.value = "";
});
