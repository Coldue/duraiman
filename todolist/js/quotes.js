const quotes = [
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  }, 
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Will you marry me?",
    author: "이장형",
  },
  {
    quote: "I love Khay!",
    author: "이장형",
  }
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuotes.quote;
author.innerHTML = todayQuotes.author;