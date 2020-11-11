const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = (0);
const overlay = document.getElementById('overlay');
const start = document.querySelectorAll('.btn__reset');

start.forEach(el => el.addEventListener('click', event => {
    console.log('test click');
    overlay.style.display === 'none';
  }));