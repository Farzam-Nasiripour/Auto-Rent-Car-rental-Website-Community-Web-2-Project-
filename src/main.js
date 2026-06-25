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