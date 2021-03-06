const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

//listening to click event

btn.addEventListener("click", function () {
  let hexColor = "#";

  //   console.log(randomNumber);
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);

    hexColor += hex[randomNumber];
  }

  //changing the text
  color.textContent = hexColor;

  //changing background color
  document.body.style.backgroundColor = hexColor;
});
