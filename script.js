var i = 1;
var j = 1;
var moveNext = false;
var animationInProgress = false;

// Function to make a guess using the Wordle API
async function makeGuess(guess) {
    try {
        const response = await fetch('https://wordle-api.vercel.app/api/wordle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess }),
        });

        const data = await response.json();

        if (data.was_correct) {
            // Handle correct guess: Set box style to green
            const boxes = document.querySelectorAll('.row-' + j + ' .box');
            boxes.forEach((box) => {
                box.style.backgroundColor = "#538d4e";
                box.style.border = "2px solid #538d4e";
            });
        } else {
            // Handle incorrect guess
            const boxes = document.querySelectorAll('.row-' + j + ' .box');
            boxes.forEach((box, index) => {
                if (data.character_info[index].scoring.in_word && data.character_info[index].scoring.correct_idx) {
                    // In word and correct position: Set box style to green
                    box.style.backgroundColor = "#538d4e";
                    box.style.border = "2px solid #538d4e";
                } else if (data.character_info[index].scoring.in_word) {
                    // In word but incorrect position: Set box style to yellow
                    box.style.backgroundColor = "#b59f3b";
                    box.style.border = "2px solid #b59f3b";
                } else {
                    // Not in word: Set box style to gray
                    box.style.backgroundColor = "#3a3a3c";
                    box.style.border = "2px solid #3a3a3c";
                }
            });
        }
    } catch (error) {
        console.error('Error making guess:', error);
    }
}

document.addEventListener('keydown', function (event) {
    var box5 = document.querySelector('.row-' + j + ' .box5');
    if (j > 6) {
        return;
    }

    var box = document.querySelector('.row-' + j + ' .box' + i);

    if (event.key.length === 1 && event.key.match(/[a-zA-Z]/) && i <= 5) {
        var a = event.key.toUpperCase();
        box.textContent = a;
        box.style.border = '2px solid #565758';
        i++;
    }

    if (event.key === 'Backspace' && i > 1) {
        i--;
        box = document.querySelector('.row-' + j + ' .box' + i);
        box.textContent = '';
        box.style.border = '2px solid #3a3a3c';
    }

    if (event.key === 'Enter' && i >= 5 && box5.textContent) {
        var guess = '';
        for (var k = 1; k <= 5; k++) {
            guess += document.querySelector('.row-' + j + ' .box' + k).textContent;
        }

        makeGuess(guess);

        if (i === 5) {
            j++;
            i = 1;
        }
    }
});
