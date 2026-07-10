// const btn_Animation = document.getElementById("menuBtn");

// btn_Animation.addEventListener("click", () => {
//   btn_Animation.classList.toggle("active");

//   document.querySelector(".line1").classList.toggle("top-3");
//   document.querySelector(".line1").classList.toggle("top-1/2");
//   document.querySelector(".line1").classList.toggle("-translate-y-1/2");
//   document.querySelector(".line1").classList.toggle("rotate-45");

//   document.querySelector(".line2").classList.toggle("opacity-0");
//   document.querySelector(".line2").classList.toggle("scale-x-0");

//   document.querySelector(".line3").classList.toggle("bottom-3");
//   document.querySelector(".line3").classList.toggle("top-1/2");
//   document.querySelector(".line3").classList.toggle("-translate-y-1/2");
//   document.querySelector(".line3").classList.toggle("-rotate-45");
// });

import "../swiper.js";

import "../preline.js";

// ///////////////////////////////////////////////////////////// //

const input = document.getElementById("search");
const clearBtn = document.getElementById("clear-search");

clearBtn.classList.add("hidden");

input.addEventListener("input", () => {
  clearBtn.classList.toggle("hidden", !input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.classList.add("hidden");
  input.focus();
});

// ///////////////////////////////////////////////////////////// //

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");

const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");

function formatPrice(price) {
  return Number(price).toLocaleString("fa-IR") + " تومان";
}

function updateSlider() {
  let min = Number(minRange.value);
  let max = Number(maxRange.value);

  // جلوگیری از رد شدن دو بولت از هم
  if (min > max) {
    min = max;
    minRange.value = min;
  }

  if (max < min) {
    max = min;
    maxRange.value = max;
  }

  minValue.textContent = formatPrice(min);
  maxValue.textContent = formatPrice(max);
}

if (minRange && maxRange && minValue && maxValue) {
  minRange.addEventListener("input", updateSlider);
  maxRange.addEventListener("input", updateSlider);

  updateSlider();
}

