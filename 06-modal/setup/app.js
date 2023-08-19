// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modelContainer = document.querySelector(".model-container");
const showButton = document.querySelector(".show-model");
const closeButton = document.querySelector(".close-btn");

showButton.addEventListener("click", function () {
  modelContainer.classList.add("show");
});

closeButton.addEventListener("click", function () {
  modelContainer.classList.remove("show");
});

modelContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("model-content")) {
    return;
  }
  modelContainer.classList.remove("show");
});
