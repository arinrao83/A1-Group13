/* Variables */
const synth = window.speechSynthesis;
const speakButton = document.getElementById('buttonSpeak');
let textToSpeak = '';

/* Arrays of words */
const nouns1 = ['the turkey', 'the cat', 'the elephant', 'the dog', 'my teacher'];
const verbs = ['sat on', 'kissed', 'danced with', 'saw', 'dosent like'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass'];

/* Functions */

// Function to generate a random word from an array
function getRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

// Function to generate a random story
function generateStory() {
    textToSpeak = getRandomWord(nouns1) + '     ' +
                  getRandomWord(verbs) + '      ' +
                  getRandomWord(adjectives) + '      ' +
                  getRandomWord(nouns2) + '      ' +
                  'in the     ' +
                  getRandomWord(places) + '     .';
}

// Function to speak the generated text
function speakNow() {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
}

/* Event Listeners */

// Event listener for each button to generate random words
document.getElementById('buttonNoun').addEventListener('click', function () {
    textToSpeak += getRandomWord(nouns1) + ' ';
});

document.getElementById('buttonVerb').addEventListener('click', function () {
    textToSpeak += getRandomWord(verbs) + ' ';
});

document.getElementById('buttonAdjective').addEventListener('click', function () {
    textToSpeak += getRandomWord(adjectives) + ' ';
});

document.getElementById('buttonNoun2').addEventListener('click', function () {
    textToSpeak += getRandomWord(nouns2) + ' ';
});

document.getElementById('buttonPlace').addEventListener('click', function () {
    textToSpeak += getRandomWord(places) + '.';
});

// Event listener for the speak button
speakButton.addEventListener('click', speakNow);

// Event listener for generating a random story
document.getElementById('buttonRandomStory').addEventListener('click', function () {
    generateStory();
    speakNow();
});
