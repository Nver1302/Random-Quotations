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

  let axe = arr[randNum];
  p.innerText = axe.quote;
  h.innerText = axe.author;

  // let user = {
  //   quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
  //   author: "- Christopher Columbus"
  // };
  //
  // let user2 = {
  //   quote: "Eighty percent of success is showing up.",
  //   author: "- Woody Allen"
  // };
  //
  // let user3 = {
  //   quote: "Life is 10% what happens to me and 90% of how I react to it.",
  //   author: "Charles Swindoll"
  // };

//   function filter_list(l) {
//   // Return a new array with the strings filtered out
//   let arr = [1,'a','b',0,15];
//   for(i = 0; i <= arr.length; i++){
//     if(arr[i] < 0 || arr[i])
//   }
// }
})
