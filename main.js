


var sun = document.querySelector("#circle");
var btn = document.querySelector("button");
var background = document.getElementById("main");
var onOfValue = 0;


btn.addEventListener("click", function () {
   if (onOfValue == 0) {
      sun.style.backgroundColor = "#ffae00";
      background.style.backgroundColor = "#000";
      circle.style.boxShadow = "31px 31px 62px #d90000, -31px -31px 62px #ff0000"
      onOfValue = 1;
      btn.innerHTML = "OF";

   } else {
      sun.style.backgroundColor = "transparent";
      circle.style.boxShadow = "none"
      onOfValue = 0;
      btn.innerHTML = "on";
      background.style.backgroundColor = "#fff";

   }
});

