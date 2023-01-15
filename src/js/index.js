const formPages = document.querySelectorAll(".form__page");
const nextPageButton = document.querySelector(".button-next");
console.log(formPages);
console.log(nextPageButton);

nextPageButton.addEventListener("click", (e) => {
  e.preventDefault();
  formPages.forEach((page) => {
    page.classList.toggle("hidden");
  });
});
