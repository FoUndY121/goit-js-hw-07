const body=document.querySelector("body")
const button=document.querySelector(".change-color")
const span=document.querySelector("span")
button.addEventListener("click",function (event) {
  body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
  span.textContent=getRandomHexColor();
});







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
