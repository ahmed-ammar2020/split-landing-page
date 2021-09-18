"use strict";
const ps5 = document.querySelector(".ps5");
const xbox = document.querySelector(".xbox");

ps5.addEventListener("click", function () {
  this.classList.remove("shrink");
  xbox.classList.remove("expand");
  this.classList.add("expand");
  xbox.classList.add("shrink");
});

xbox.addEventListener("click", function () {
  this.classList.remove("shrink");
  ps5.classList.remove("expand");
  this.classList.add("expand");
  ps5.classList.add("shrink");
});
