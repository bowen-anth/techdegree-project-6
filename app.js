const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = (0);
const overlay = document.getElementById('overlay');
const start = document.getElementsByClassName('.btn__reset');
const startButton = document.getElementById('btn__start');

const phrases = ["beat around the bush", "a dime a dozen", "lifes a box of chocolates", "cheaters never prosper", "bite the bullet"];

/*

start.forEach(hide => hide.addEventListener('click', event => {
    console.log('test click');
    overlay.style.display === 'none';
  }));

  function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    phrases.count = phrases.substring(0, phrases[i].length);
} 

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

*/

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {

}

// adds the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    console.log('start button pressed');
    overlay.style.display = "none";
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});
