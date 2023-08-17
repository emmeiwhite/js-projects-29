// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img = document.querySelector(".img-container #person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");

/*--  First we get the elements, then we apply Event Handlers --*/

/** Just as a starting point, let's assume we have only one card and we have to inset data via JS */

/*
const person = {
  id: 1,
  name: "susan smith",
  job: "web developer",
  img: "https://www.course-api.com/images/people/person-1.jpeg",
  text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
};

img.setAttribute("src", person.img);
author.textContent = person.name;
job.textContent = person.job;
info.textContent = person.text;
*/

/* --- NOW LET'S WORK WITH WHOLE ARRAY | 
      It is something like ReactJS in this case. 

      We assume we have one Component (Structure in HTML), and based on the user click, we update the content
--- */

let currentPerson = 0;
let totalPersons = reviews.length - 1;

function renderPerson() {
  img.setAttribute("src", reviews[currentPerson]["img"]);
  author.textContent = reviews[currentPerson]["name"];
  job.textContent = reviews[currentPerson]["job"];
  info.textContent = reviews[currentPerson]["text"];
}

function showPrevPerson() {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = totalPersons;
  }

  renderPerson();
}

function showNextPerson() {
  currentPerson++;
  if (currentPerson > totalPersons) {
    currentPerson = 0;
  }
  renderPerson();
}

btnPrev.addEventListener("click", showPrevPerson);
btnNext.addEventListener("click", showNextPerson);

/*** No Loop thing, Just the simple Logic and wollah
 * !!!!
 */

/** Surprise btn: This will show a person randomly, so nothing major */

const randomBtn = document.querySelector(".random-btn");

function showRandom() {
  const randomId = Math.floor(Math.random() * reviews.length);
  console.log(randomId);

  currentPerson = randomId;
  console.log(reviews);
  console.log(reviews[0]);
  // console.log(reviews[currentPerson]);
  renderPerson();
}

randomBtn.addEventListener("click", function () {
  showRandom();
});
