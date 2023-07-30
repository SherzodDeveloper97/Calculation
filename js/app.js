"use strict";

// Selectors:
const clickBtn = document.querySelector(".equal_to-btn");
const openBox = document.querySelector(".add_calc--box");

// Events:
clickBtn.addEventListener("click", () => {
    openBox.classList.toggle("show");
})
