const DOMselectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};
const cat = "TELLER";
DOMselectors.box.insertAdjacentHTML(
  "beforebegin",
  `<h1>FORTUNE ${cat}</h1>`
);
DOMselectors.button.addEventListener("click", function () {
  let input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}, You Are Destined For Success</p>`);
DOMselectors.input.value = "";
});
DOMselectors.clearbtn.addEventListener("click", function (){
 let input = DOMselectors.input.value;
  DOMselectors.input.value= "";

})