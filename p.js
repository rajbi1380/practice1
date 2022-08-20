const acc = document.querySelector(".according");
const pn = document.querySelector(".panel");
acc.addEventListener("click", function () {
  acc.classList.toggle(".active");
  if (pn.style.maxHeight) {
    pn.style.maxHeight = null;
  } else {
    pn.style.maxHeight = pn.style.scrollHeight + "px";
  }
});
