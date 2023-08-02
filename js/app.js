"use strict";

// Selectors:
const clickBtn = document.querySelector(".equal_to-btn");
const openBox = document.querySelector(".add_calc--box");
const clickSecondBtn = document.getElementById("first--click_btn");
const openSecondBox = document.querySelector(".calc__section_item");
const clickThirdBtn = document.querySelector("#second--click_btn");
const openThirdBox = document.querySelector(".calc__last_section--container");



// Events:
clickBtn.addEventListener("click", () => {
    openBox.classList.toggle("active");
    if(openSecondBox.classList.contains("active")){
        openSecondBox.classList.remove("active");
    };
    if(openThirdBox.classList.contains("active")){
        openThirdBox.classList.remove("active");
    }
});

clickSecondBtn.addEventListener("click", () => {
    if(openThirdBox.classList.contains("active")){
        openThirdBox.classList.remove("active");
    }
    openSecondBox.classList.toggle("active");
});

clickThirdBtn.addEventListener("click", () => {
    if(openSecondBox.classList.contains("active")){
        openSecondBox.classList.remove("active");
    }
    openThirdBox.classList.toggle("active");
})