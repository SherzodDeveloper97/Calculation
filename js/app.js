"use strict";

// Selectors:
const clickBtn = document.querySelector(".equal_to-btn");
const openBox = document.querySelector(".add_calc--box");
const clickOtherBtn = document.getElementById("add_calc--click_btn");
const openOtherBox = document.querySelector(".calc__section_item");


// Events:
clickBtn.addEventListener("click", () => {
    openBox.classList.toggle("show");
    openOtherBox.classList.remove("active");
});

clickOtherBtn.addEventListener("click", () => {
    openOtherBox.classList.toggle("active");
});