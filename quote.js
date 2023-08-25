  const quote = document.querySelector(".quote")
  const person = document.querySelector(".person")
  const btn = document.querySelector("#new-quote")

  const quotes = [{
    quote: '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    person:' Albert Einstein '
  }, {
    quote: '"No one can make you inferior without your consent."',
    person:' Eleanor Roosevelt '
  }, {
    quote: '"All the world"s a stage, and the women and men merely players."',
    person:' William Shakespeare '
  }, {
    quote: '"Genius is one percent inspiration and ninety-nine percent perspiration."',
    person:' Thomas Edison '

  }, {
    quote: '"Ask not what your country can do for you; ask what you can do for your country."',
    person:' John Kennedy '

  },
];
btn.addEventListener("click", function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})