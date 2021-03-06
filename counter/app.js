//set initial span
let count = 0;

const btns = document.querySelectorAll(".btn");

const value = document.querySelector("#value");

// console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // if(styles.contains('decrease')){
    //     count--;
    // }
    // else if (styles.contains('increase')){
    //     count++;
    // }
    styles.contains("decrease") ? count-- : count++;

    if (styles.contains("reset")) count = 0;

    value.textContent = count;

    // console.log(value);
    //changing the colour
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "#222";
  });
});
