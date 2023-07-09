const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow"];

const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  const currentIndex = Math.floor(Math.random() * colors.length);
  console.log(currentIndex);
  document.body.style.backgroundColor = colors[currentIndex];
});
