const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let scale = 1;

noBtn.addEventListener("click", () => {
  scale -= 0.15;
  noBtn.style.transform = `scale(${scale})`;

  if (scale <= 0.3) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  result.innerHTML = "Yay! 💕 I can’t wait to spend Valentine’s Day with you 💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
