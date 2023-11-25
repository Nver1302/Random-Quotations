let p = document.querySelector('.quote')
let b = document.querySelector('.btn')
let h = document.querySelector('.author')

function Person(quote, author){
  this.quote = quote,
  this.author = author
}

const person1 = new Person("You can never cross the ocean until you have the courage to lose sight of the shore.", "- Christopher Columbus");
const person2 = new Person("Eighty percent of success is showing up.", "- Woody Allen");
const person3 = new Person("Life is 10% what happens to me and 90% of how I react to it.", "- Charles Swindoll");
const person4 = new Person("It is unbecoming for young men to utter maxims.", "Otto von Bismarck");
const person5 = new Person("Bachelor's degrees make pretty good placemats if you get 'em laminated.", "Jeph Jacques");
const person6 = new Person("Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", "Princess Diana");
const person7 = new Person("Together we can change the world, just one random act of kindness at a time.", "Ron Hall");
const person8 = new Person("Goals transform a random walk into a chase.", "Mihaly Csikszentmihalyi");
const person9 = new Person("There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.", "Jeff Greenfield");
const person10 = new Person("Mistakes and disappointment make the sweet things in life that much sweeter.", "Takayuki Ikkaku, Arisa Hosaka and Toshihiro Kawabata");


b.addEventListener('click', function() {
  let arr = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

  let randNum = Math.floor(Math.random() * arr.length);

  let quote = arr[randNum];
  p.innerText = quote.quote;
  h.innerText = quote.author;
})
