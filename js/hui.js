const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  new Audio("1.mp3").play();
  btn.textContent = "Продовжуй";
});
