const inputContainer = document.querySelector(
  "#nav .nav-container .middle-nav .input-container"
);
const inputEl = document.querySelector(
  "#nav .nav-container .middle-nav .input-container input"
);
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

inputContainer.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
  inputEl.blur();
});

document.addEventListener(
  "click",
  (e) => {
    if (e.target.matches(".modal")) return;
  },
  { once: true }
);

overlay.addEventListener("click", (e) => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// Active toggle
const firstToggleBtnEls = document.querySelectorAll(
  ".toggle-btn-container .first-toggle .toggle-first"
);
const firstToggleContasiner = document.querySelector(
  ".toggle-btn-container .first-toggle"
);

const secondToggleBtnEls = document.querySelectorAll(
  ".toggle-btn-container .second-toggle .toggle-first"
);
const secondToggleContasiner = document.querySelector(
  ".toggle-btn-container .second-toggle"
);

firstToggleBtnEls.forEach((firstToggleBtnEl) => {
  firstToggleBtnEl.addEventListener("click", () => {
    document
      .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
      ?.classList.remove("active");
    firstToggleBtnEl.classList.add("active");
  });
});

secondToggleBtnEls.forEach((secondToggleBtnEl) => {
  secondToggleBtnEl.addEventListener("click", () => {
    document
      .querySelector(
        ".toggle-btn-container .second-toggle .toggle-first.active"
      )
      ?.classList.remove("active");
    secondToggleBtnEl.classList.add("active");
  });
});

// Dropdown popup
const dropdownBtn = document.querySelector(".dropdown-attribute");
const dropdownContainer = document.querySelector(".toggle-dropdown-container");

dropdownBtn.addEventListener("click", (e) => {
  dropdownContainer.classList.toggle("active");
});

const dropDown1 = document.querySelector(".dropd-1");
const dropDown2 = document.querySelector(".dropd-2");
const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
const versionModeDropDown = document.querySelector(".version-droppdown-popup");

dropDown1.addEventListener("click", () => {
  versionModeDropDown.classList.toggle("active");
});

dropDown2.addEventListener("click", () => {
  darkModeDropDown.classList.toggle("active");
});

// const ellipse = document.querySelector("  .ellipsis .ellipse");
// const popupContainer = document.querySelector("  .popup-side-bar");

// ellipse.addEventListener("click", () => {
//   popupContainer.classList.add("active");

//   const xMark = document.querySelector("x-mark-close");

//   xMark.addEventListener("click", () => {
//     if (popupContainer.classList.contains)
//       popupContainer.classList.remove("active");
//   });
// });
