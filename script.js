document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const result = document.getElementById("result");
  const question = document.getElementById("question");

  let scale = 1;
  let messages = [
    "Are you sure? 🥺",
    "Don’t break my heart 😢",
    "Pleaseee 💕",
    "Think again 😭"
  ];
  let msgIndex = 0;

  noBtn.addEventListener("click", () => {
    scale -= 0.15;
    noBtn.style.transform = `scale(${scale})`;

    noBtn.style.animation = "shake 0.3s";
    setTimeout(() => noBtn.style.animation = "", 300);

    question.innerText = messages[msgIndex % messages.length];
    msgIndex++;

    if (scale <= 0.3) {
      noBtn.style.display = "none";
    }
  });

  yesBtn.addEventListener("click", () => {
    question.innerText = "Yayyyy! 💖💖💖";
    result.innerHTML = "I can’t wait to spend Valentine’s Day with you 🥰";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    createHearts();
  });

  function createHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }
  }

});
