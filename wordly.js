const letter = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');

async function init() {

    document.addEventListener('keydown', function handleKeyPress(event) {
        const action = event.key;
        console.log(action);

        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backSpace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase());
        } else {
            // do Nothing
        }

    });
}

function isLetter(letter) {
    return /^[a-zA-z]$/.test(letter);
}

init();