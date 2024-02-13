// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById('welcome-el');

let name = 'Keith Rincon';

let greeting = "Hey what's good with you, ";

welcomeEl.innerText = greeting + name;

// welcomeEl.innerText = welcomeEl.innerText + ' 👋🏼';
// new short hand
welcomeEl.innerText += ' 👋🏼';
