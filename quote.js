
let btn=document.querySelector("#newquote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");


const quotes =[
{"quote": "The only way to do great work is to love what you do.", "person": "Steve Jobs"},
{"quote": "Life is what happens when you're busy making other plans.", "person": "John Lennon"},
{"quote": "Believe you can and you're halfway there.", "person": "Theodore Roosevelt"},
{"quote": "Strive not to be a success, but rather to be of value.", "person": "Albert Einstein"},
{"quote": "The best way to predict the future is to invent it.", "person": "Alan Kay"},
{"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "person": "Winston Churchill"},
{"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "person": "Nelson Mandela"},
{"quote": "Your time is limited, don't waste it living someone else's life.", "person": "Steve Jobs"},
{"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "person": "Franklin D. Roosevelt"},
{"quote": "It is during our darkest moments that we must focus to see the light.", "person": "Aristotle"}

]


btn.addEventListener("click", ()=>{
let random=Math.floor(Math.random()*quotes.length);
quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;
})
