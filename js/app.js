/* Variables */
const synth = window.speechSynthesis;
const speakButton = document.getElementById('buttonSpeak');
let textToSpeak = '';
let textToSpeakArr = [];
/* Arrays of words */
const nouns1 = ['the turkey', 'the cat', 'the elephant', 'the dog', 'my teacher'];
const verbs = ['sat on', 'kissed', 'danced with', 'saw', 'doesnt like'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass'];
let randomNoun, randomNoun2, randomAdj, randomPlace, randomVerb;
let duplicates = [];// keeps track of the same parts of speech so they can only be selected once
/* Functions */

// Function to generate a random word from an array
function getRandomWord(wordArray) {
    duplicates.push(wordArray);
    return wordArray[Math.floor(Math.random() * wordArray.length)];
    
}
const td = document.querySelectorAll("td");
// Function to highlight random words
function highlighWords() {
    // HIGHLIGHT WORDS IN THE TABLE 
    td.forEach(i => {
        textToSpeakArr.forEach(j => {
            if(i.textContent.trim() === j.trim()){
                i.style.backgroundColor = "red";
                i.style.padding = "30px";
                i.style.transition = "all 1.5s ease-in-out";
            }
        });
    });
    /*textToSpeak = getRandomWord(nouns1) + '     ' +
                  getRandomWord(verbs) + '      ' +
                  getRandomWord(adjectives) + '      ' +
                  getRandomWord(nouns2) + '      ' +
                  'in the     ' +
                  getRandomWord(places) + '     .';
    */
}

// Function to speak the generated text
function speakNow() {
    
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
    
}

/* Event Listeners */
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        e.target.style.backgroundColor = "red";
        if(e.target.textContent.trim()=="Speak the generated story"){
            buttons.forEach(i=> {
                i.style.backgroundColor = "";
            })
        }
    });
});

// Event listener for each button to generate random words
document.getElementById('buttonNoun').addEventListener('click', function () {
    if(!duplicates.includes(nouns1)){
        randomNoun = getRandomWord(nouns1);
        textToSpeak += randomNoun + ' ';
        textToSpeakArr.push(randomNoun);
    }
  
   

});

document.getElementById('buttonVerb').addEventListener('click', function () {
    
    if(!duplicates.includes(verbs)){
        randomVerb = getRandomWord(verbs);
        textToSpeak += randomVerb + ' ';
        textToSpeakArr.push(randomVerb);
    }
});

document.getElementById('buttonAdjective').addEventListener('click', function () {
     
     if(!duplicates.includes(adjectives)){
        randomAdj = getRandomWord(adjectives);
        textToSpeak += randomAdj + ' ';
        textToSpeakArr.push(randomAdj);
     }
});

document.getElementById('buttonNoun2').addEventListener('click', function () {
    
    if(!duplicates.includes(nouns2)){
        randomNoun2 = getRandomWord(nouns2);
        textToSpeak += randomNoun2 + ' ';
        textToSpeakArr.push(randomNoun2);
    }
});

document.getElementById('buttonPlace').addEventListener('click', function () {
    
    if(!duplicates.includes(places)){
        randomPlace = getRandomWord(places);
        textToSpeak += randomPlace + ' ';
        textToSpeakArr.push(randomPlace);
    }
});

// Event listener for the speak button
//speakButton.addEventListener('click', speakNow);

function resetCells(){
    td.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.style.padding = "";
    })
}
// Event listener for generating a random story
document.getElementById('buttonRandomStory').addEventListener('click', function () {
    if(textToSpeakArr.length<5){
        alert("Please, select all the parts of speech");
    }else{
        highlighWords();
        speakNow();
    }
    //reset for a new game
    duplicates = []
    textToSpeak = "";
    textToSpeakArr = [];
    const timeOut = setTimeout(resetCells, 2000);
    
    
});
