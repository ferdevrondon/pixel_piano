const whiteKey = document.querySelectorAll('.white-key');
const blackKey = document.querySelectorAll('.black-key');

// Asignación simple de teclas para blancas (21 teclas)
const whiteTriggerKeys = 'zxcvbnm,./asdfghjkl;\'"'.split('');

// Asignación simple de teclas para negras (15 teclas)
const blackTriggerKeys = 'qwertyuiop12345'.split('');

// Evento para cuando se presiona una tecla
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    
    // Para teclas blancas
    const whiteKeyIndex = whiteTriggerKeys.indexOf(key);
    if (whiteKeyIndex !== -1 && whiteKeyIndex < whiteKey.length) {
        whiteKey[whiteKeyIndex].classList.add('active');
        ran_col(whiteKey[whiteKeyIndex]);
        let sound = new Audio(`sounds/white-keys/${whiteKeyIndex}.mp3`);
        playSound(sound);
    }
    
    // Para teclas negras
    const blackKeyIndex = blackTriggerKeys.indexOf(key);
    if (blackKeyIndex !== -1 && blackKeyIndex < blackKey.length) {
        blackKey[blackKeyIndex].classList.add('active');
        ran_col(blackKey[blackKeyIndex]);
        let sound = new Audio(`sounds/black-keys/${blackKeyIndex}.mp3`);
        playSound(sound);
    }
});

// Evento para cuando se suelta una tecla
document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    
    // Para teclas blancas
    const whiteKeyIndex = whiteTriggerKeys.indexOf(key);
    if (whiteKeyIndex !== -1 && whiteKeyIndex < whiteKey.length) {
        whiteKey[whiteKeyIndex].classList.remove('active');
        whiteKey[whiteKeyIndex].style.background = 'white';
    }
    
    // Para teclas negras
    const blackKeyIndex = blackTriggerKeys.indexOf(key);
    if (blackKeyIndex !== -1 && blackKeyIndex < blackKey.length) {
        blackKey[blackKeyIndex].classList.remove('active');
        blackKey[blackKeyIndex].style.background = 'black';
    }
});

// Mantener funcionalidad de clic
blackKey.forEach((black, index) => {
    black.addEventListener('click', () => {
        let sound = new Audio(`sounds/black-keys/${index}.mp3`);
        playSound(sound);
    });
});

whiteKey.forEach((white, index) => {
    white.addEventListener('click', () => {
        let sound = new Audio(`sounds/white-keys/${index}.mp3`);
        playSound(sound);
    });
});

function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

function ran_col(elem) { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ['4169e1','ffff00','32cd32','2e8b57','40e0d0','ff7f50','ff6b8a']; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    elem.style.background = color; // Setting the random color on your div element.
}