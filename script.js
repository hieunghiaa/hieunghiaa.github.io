const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Hehe, I luv u";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamt0emF4bDJic3U0a2loZGFjeHQ4ZHIyOG5qb3Rjb29lbThuNTJidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WwNWngXlZ7y2t0PJ55/giphy.gif";
  
  // Thay đổi màu nền
  var body = document.querySelector("body");
  body.style.backgroundColor = "#ffffff"; // Mã màu #ffeef9
});


noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});