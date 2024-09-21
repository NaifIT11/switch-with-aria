const button = document.querySelector("button[role]");
const switchCircle = document.querySelector(".switch__circle");
button.addEventListener("click", (e) => {
  switchCircle.classList.toggle("switch__circle--action");
  button.classList.toggle("switch--action");

  if (button.getAttribute("data-value") === "off") {
    button.setAttribute("data-value", "on");
  } else {
    button.setAttribute("data-value", "off");
  }
  if (button.getAttribute("aria-checked") === "false") {
    button.setAttribute("aria-checked", "true");
  } else {
    button.setAttribute("aria-checked", "false");
  }

  console.log(button.dataset.value);
});
