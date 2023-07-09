const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Idea is to create hex code as the user clicks. So, we need to have combination of 6 digits from 0-f. Loop will run 6 times and we will keep adding digit each time until our hex code is ready

const button = document.getElementById("btn");
const textDiv = document.querySelector(".color");
let color = "#";
const getColor = function () {
  for (let i = 0; i < 6; i++) {
    // Select random number from the array

    const randomValue = Math.floor(Math.random() * hex.length); // [0, 15)
    color += hex[randomValue];
  }
  console.log(color);
};

button.addEventListener("click", () => {
  getColor();
  document.body.style.backgroundColor = color;
  textDiv.textContent = color;
  color = "#";
});
