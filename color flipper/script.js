const colors = ["green", "red", "rgba(133,122,200)", "f1f5025"];

// console.log(colors[1]);
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 and 3

  //generating random number
  const randomNumber = Math.trunc(Math.random() * colors.length);
  //   console.log(randomNumber);

  document.body.style.background = colors[randomNumber];

  //now changing text in span
  color.textContent = colors[randomNumber];
});
