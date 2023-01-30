import * as model from "./model.js";
import formView from "./formView.js";

const controlPageChange = function () {
  // Validate the page 1 of the form before changing pages
  if (model.state.currentPage === 1 && formView.validateForm()) {
    formView.goToPage(model.state.currentPage + 1);
    model.state.currentPage += 1;
  }
};

const init = function () {
  formView.addPageChangeHandler(controlPageChange);
};

init();
