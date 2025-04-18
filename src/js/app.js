document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".collapse__btn");
  const content = document.querySelector(".collapse__content");

  btn.addEventListener("click", () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
