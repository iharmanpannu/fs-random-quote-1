setInterval(printQuote, 20000);
window.onload = printQuote;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let message = '';
let viewedQuotes = [];


function print(quote) {
    const outputDiv = document.getElementById("quote-box");
    outputDiv.innerHTML = quote;
}



// function to get a random quote splice it and save it to var random quote 
function getRandomQuote() {
    // This variable create a random quotes.
    const randomQuote = Math.floor(Math.random() * quotes.length);

    // This var check if random quote is already shown to user or not.
    const splicedQuote = quotes.splice(randomQuote, 1)[0];
    viewedQuotes.push(splicedQuote);
    if (quotes.length === 0) {
        quotes = viewedQuotes;
        viewedQuotes = [];
    }
    return splicedQuote;
}


// This functions creates random background color
function randomColors() {
    let randomColor;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}


// function to print quote to the screen
function printQuote() {
    // On click, This function runs, then fires the getRandomQuote function
    const quotes = getRandomQuote();
    message = `<p class="quote">${quotes.quote}</p>`; //Prints quotes
    message += `<p class="source">${quotes.source}</p>`; //Prints source
    //Checks if citation is available if yes then prints it else empty string.
    quotes.citation ? (message += `<p class="citation">${quotes.citation}</p>`) : (message += "");
    //Checks if year is available if yes then prints it else empty string.
    quotes.year ? (message += `<p class="year">${quotes.year}</p>`) : (message += "");
    //Checks if year is available if yes then prints it else empty string.
    quotes.tag ? (message += `<h3 class="tag">${quotes.tag}</h3>`) : (message += "");

    print(message);

    // To Generate Random Colors
    randomColors();
    // Change background color when quote change
    document.getElementById("bgcolor").style.backgroundColor = randomColors();
}