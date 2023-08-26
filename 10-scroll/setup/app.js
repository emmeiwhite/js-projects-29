// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const date = document.querySelector(".date");

date.textContent = new Date().getFullYear();

/* --- Toggle the main-menu ---*/

const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function (e) {
  //   linksContainer.classList.toggle("show-links");
  // let's do it dynamically
  console.log("-------------------------");
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;

  console.log("linksContainer height is:" + linksContainerHeight);
  console.log("links height is:" + linksHeight);

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
