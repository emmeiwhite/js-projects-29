const items = [...document.querySelectorAll(".number")];
console.log(items);

// Iterating over each Array Element
items.forEach((item) => {
  updateCount(item);
});

function updateCount(el) {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
}
