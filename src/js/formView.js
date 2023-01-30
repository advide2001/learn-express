import { EMAIL_REGEX, PHONE_REGEX } from "./config";

class formView {
  _buttonElement = document.querySelector(".form__button");
  _forms = document.querySelectorAll(".form__page");

  addPageChangeHandler(handlerFunction) {
    this._buttonElement.addEventListener("click", function (e) {
      e.preventDefault();
      handlerFunction();
    });
  }

  goToPage(pageNumber) {
    // Hide all the forms
    forms.forEach((form) => {
      form.classList.add("hidden");
    });
    // Show the form that corresponds to the page number
    forms[pageNumber - 1].classList.remove("hidden");
    console.log(this._buttonElement);
  }

  validateForm() {
    // Validate form
    // Extract dom elements
    const name = document.querySelector("#name");
    const nameError = document.querySelector(".name-error");
    const email = document.querySelector("#email");
    const emailError = document.querySelector(".email-error");
    const phone = document.querySelector("#phone");
    const phoneError = document.querySelector(".phone-error");

    // Remove error messages, by default
    nameError.innerHTML = emailError.innerHTML = phoneError.innerHTML = "";

    // Validate form data and return true
    if (
      name.value !== "" &&
      EMAIL_REGEX.test(email.value) &&
      PHONE_REGEX.test(phone.value)
    ) {
      return true;
    } else {
      if (name.value === "") {
        nameError.innerHTML = "This field is required!";
      } else if (!EMAIL_REGEX.test(email.value)) {
        emailError.innerHTML = "This field is required!";
      } else if (!PHONE_REGEX.test(phone.value)) {
        phoneError.innerHTML = "This field is required!";
      }
    }
  }
}

export default new formView();
