// // Array containing quotes


const quotes = [
  {
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are d" +
      "oing the impossible.",
    author: "Francis of Assisi",
    year: 1984
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    year: 1991
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    year: 1944
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is alwa" +
      "ys to try just one more time.",
    author: "Thomas A. Edison",

    year: 2002
  },
  {
    quote:
      "The will to win, the desire to succeed, the urge to reach your full potential..." +
      " these are the keys that will unlock the door to personal excellence.",
    author: "Confucius",
    year: 2011
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    year: 2011
  },
  {
    quote:
      "A creative man is motivated by the desire to achieve, not by the desire to beat " +
      "others.",
    author: "Ayn Rand",
    year: 2011
  },
  {
    quote:
      "A creative man is motivated by the desire to achieve, not by the desire to beat " +
      "others.",
    author: "Ayn Rand",
    year: 2011
  },
  {
    quote: "Expect problems and eat them for breakfast.",
    author: "Alfred A. Montapert",
    year: 2011
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure abou" +
      "t the universe.",
    author: "Albert Einstein",
    year: 2011
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
    year: 2011
  }
];

const colors = [
  "#490A3D",
  "#BD1550",
  "#E97F02",
  "#F8CA00",
  "#8A9B0F",
  "#69D2E7",
  "#FA6900",
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#77B1A9",
  "#73A857"
];


// // Load random quote when browser loads
// window.onload = randomQuote;

// var button = document.getElementById("loadQuote"),
//     quote = document.getElementById("quote"),
//     author = document.getElementById('author'),
//     random;

// // event listener to respond to "Show another quote" button clicks when user
// // clicks anywhere on the button, the "printQuote" function is called
// button.addEventListener("click", randomQuote, false);

function randomQuote() {
  // This create a random number to pick random quote
  random = Math.floor(Math.random() * quotes.length);
  // This gets the random quote
  quote.innerHTML = quotes[random].quote;
  // This gets the name of the author
  author.innerHTML = '&mdash;' +  quotes[random].author;

}