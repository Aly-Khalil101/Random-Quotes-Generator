let generateBtn = document.getElementById("btn-generate-quote");
let autoBtn = document.getElementById("btn-auto-generate");
let stopBtn = document.getElementById("btn-stop-generate");
let quoteDiv = document.querySelector(".quote p");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");
let authorName = document.querySelector(".author");
let intervalId;

generateBtn.onclick = generateQuote;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;

// Get the Quotes from JSON file :
async function getQuotesWithAuthorsName() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}

// Generate the Quote
async function generateQuote() {
  const quotes = await getQuotesWithAuthorsName();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
  authorName.innerHTML = quote.author;
}

// Start Autoplay :
function startAutoPlay() {
  intervalId = setInterval(generateQuote, 3000);
  autoStatus.innerHTML = "Auto - ON";
}
// Stop Autoplay :
function stopAutoPlay() {
  console.log(intervalId);
  clearInterval(intervalId);
  autoStatus.innerHTML = "";
}

// -----------------------------------------

// The diffrence between async & await
