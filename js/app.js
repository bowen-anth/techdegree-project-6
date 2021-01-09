const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = (0);
const overlay = document.getElementById('overlay');
const startButton = document.getElementById('startButton');
const button = document.getElementsByTagName('button');
const phraseDisplay = document.getElementById('phrase');
const bannerDisplay = document.getElementById('banner');
const qwertyDisplay = document.getElementById('qwerty');
const scoreBoardDisplay = document.getElementById('scoreboard');
const ul = document.getElementById('list');
const heart = document.querySelectorAll('.tries img');

let phrases = [
    'beat around the bush', 
    'a dime a dozen', 
    'lifes a box of chocolates', 
    'cheaters never prosper', 
    'bite the bullet'
];

    //return a random phrase from an array;
    const getRandomPhraseAsArray = arr => {
    let phraseIndex = Math.floor(Math.random() * phrases.length);
    let chosenPhrase = phrases[phraseIndex];
    let phraseLetters = chosenPhrase.split('');
    console.log(phraseLetters);
    return phraseLetters;
}

let result = getRandomPhraseAsArray(phrases);

	//adds the letteres of a string to the display
const addPhraseToDisplay = arr => {
	for (let i = 0; i < arr.length; i++) {
		let li = document.createElement('li');
		li.textContent = arr[i];
		ul.appendChild(li);
		if(arr[i] !== ' ') {
			 li.className = 'letter';
		} else {
			li.className = 'space';
		}
	}
};

let addToDisplay = addPhraseToDisplay(result);

//check if a letter is in the phrase
const checkLetter = btn => {
	let li = document.querySelectorAll('.letter');
	let match = null;
	for (let i = 0; i < li.length; i++) {
		if (li[i].textContent.toLowerCase() === btn.textContent) {
			li[i].classList.add('show');
			match = li[i].textContent;
		} 
	}
	return match;
};

// check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
//hide overlay on start button press


startButton.addEventListener('click', () => {
  overlay.style.display = 'none'
});


//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});