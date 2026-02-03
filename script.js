document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const result = document.getElementById("result");
  const question = document.getElementById("question");

  let scale = 1;
  let clickedOnce = false;

  const messages = [
    "Are you sure? 🥺",
    "Don’t break my heart 😢",
    "Pleaseee 💕",
    "Think again 😭"
  ];
  let msgIndex = 0;

  noBtn.addEventListener("click", () => {

    // Change NO text once
    if (!clickedOnce) {
      noBtn.innerText = "you are thangoooo, don't say no 😭";
      clickedOnce = true;
    }

    // Shrink smoothly and NEVER grow back
    scale = Math.max(scale - 0.15, 0.25);
    noBtn.style.transform = `scale(${scale})`;

    // Shake without breaking scale
    noBtn.classList.remove("shake");
    void noBtn.offsetWidth; // force reflow
    noBtn.classList.add("shake");

    // Change question text
    question.innerText = messages[msgIndex % messages.length];
    msgIndex++;

    // Hide when very small
    if (scale <= 0.3) {
      noBtn.style.display = "none";
    }
  });

 const coupleCats = document.getElementById("coupleCats");

yesBtn.addEventListener("click", () => {
  question.innerText = "Yayyyy! 💖💖💖, Ummmaaaaa😘😘😘";
  result.innerHTML = "I have planned so many nice things to you, come lets enjoy the day";

  question.classList.add("big-love-text");
  result.classList.add("big-love-subtext");

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  coupleCats.classList.remove("hidden");  // 🐱🐱 SHOW CATS

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
