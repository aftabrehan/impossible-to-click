const btn = document.getElementById("btn");

const btnWidth = window.innerWidth - 200;
const btnHeight = window.innerHeight - 70;

btn.addEventListener("mouseover", () => {
  btn.style.left = Math.floor(Math.random() * btnWidth + 1) + "px";
  btn.style.top = Math.floor(Math.random() * btnHeight + 1) + "px";
});

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "yellow";
});
