const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const overlay = document.getElementById('overlay');
const startButton = document.getElementById('startButton');
const button = document.getElementsByClassName('button');
const phraseDisplay = document.getElementById('phrase');
const bannerDisplay = document.getElementById('banner');
const qwertyDisplay = document.getElementById('qwerty');
const scoreBoardDisplay = document.getElementById('scoreboard');
const ul = document.getElementById('list');
const heart = document.getElementsByClassName('heart');
const heartLost = 'images/lostHeart.png';
const letter = document.getElementsByClassName('letter');

let phrases = [
    'BEAT AROUND THE BUSH', 
    'A DIME A DOZEN', 
    'LIFES A BOX OF CHOCOLATES', 
    'CHEATERS NEVER PROSPER', 
    'BITE THE BULLET'
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

	//adds the letters of a string to the display
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
	let checkLetter = document.getElementsByTagName('LI');
	let match = null;
	for (let i = 0; i < checkLetter.length; i++) {
		if (btn == checkLetter[i].textContent.toUpperCase()) {
			checkLetter[i].classList.add('show');
			match = true;
		}
	}
	return match;
}

// check if the game has been won or lost
const checkWin = () => {

}

//listen for the start game button to be pressed
//hide overlay on start button press

startButton.addEventListener('click', () => {
  overlay.style.display = 'none'
});


//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
	if (e.target.tagName == 'BUTTON') {
		e.target.classList.add('chosen');
		e.target.disabled = 'true';
		let correctLetter = checkLetter.call(btn);
	}
	else {
		heartLost[missed];
		missed++;
	}
});