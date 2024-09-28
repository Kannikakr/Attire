var quotes = [
  "Exchange clothes with friends or community groups to refresh your wardrobe without buying new items.",
  "Repurpose old clothes into new designs or accessories through simple sewing and crafting projects.",
  "Spend on high-quality, sustainable clothes that last longer, reducing the need for frequent replacements.",
  "Choose biodegradable fabrics like organic cotton or hemp that are better for the environment.",
  "Buy pre-loved clothes from thrift stores or online marketplaces to save money and reduce waste.",
  "Learn basic sewing skills to fix clothes and extend their life, reducing the need to buy new ones.",
  "Choose brands that follow sustainable and ethical practices, like Fair Trade and GOTS-certified brands.",
  "Build a smaller, versatile wardrobe with essential items that mix and match easily.",
  "Purchase from companies that prioritize ethical labor practices and environmental sustainability."
];


function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  quoteText.innerHTML = '"' + quote + '"';
}


let quoteText = document.querySelector(".quote_text");


setInterval(generateQuote, 2000);

generateQuote();
