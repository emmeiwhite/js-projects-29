const toggler = document.querySelector(".sidebar-toggle");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector(".close-btn");

toggler.addEventListener("click", function () {
  aside.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  aside.classList.remove("show-sidebar");
});
