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

const range = document.getElementById("slider-range");

function updateSlider() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

  if (min > max) {
    min = max;
    minRange.value = min;
  }

  if (max < min) {
    max = min;
    maxRange.value = max;
  }

  minValue.textContent = min;
  maxValue.textContent = max;

  const minPercent = (min / 100) * 100;
  const maxPercent = (max / 100) * 100;

  range.style.left = minPercent + "%";
  range.style.width = maxPercent - minPercent + "%";
}

minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

updateSlider();
function formatPrice(price) {
  return price.toLocaleString("fa-IR") + " تومان";
}

function updateSlider() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

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

// ///////////////////////////////////////////////////////////// //