var i = 1;
var j = 1;

var answer = "FOODS";

var gameEnded = false;

function getLetter(button) {
    var buttonValue = button.value;
    var event = new Event('keydown');
    event.key = buttonValue;
    document.dispatchEvent(event);
}

function getFrequency(word) {
    var frequency = {};


    for (let i = 0; i < 6; i++) {
        var letter = word[i];

        if (frequency[letter]) {
            frequency[letter]++;
        }
        else {
            frequency[letter] = 1;
        }
    }

    return frequency;
}

var animationInProgress = false;


document.addEventListener('keydown', function (event) {
    if (animationInProgress === true || gameEnded === true) {
        return;
    }
    var box5 = document.querySelector('.row-' + j + ' .box5');


    if (event.key === 'Enter') {
        event.preventDefault();
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
        animationInProgress = true;

        var answerFrequency = getFrequency(answer);

        var box1 = document.querySelector('.row-' + j + ' .box1');
        var box2 = document.querySelector('.row-' + j + ' .box2');
        var box3 = document.querySelector('.row-' + j + ' .box3');
        var box4 = document.querySelector('.row-' + j + ' .box4');


        var button1 = document.querySelector('button[value="' + box1.textContent + '"]');
        var button2 = document.querySelector('button[value="' + box2.textContent + '"]');
        var button3 = document.querySelector('button[value="' + box3.textContent + '"]');
        var button4 = document.querySelector('button[value="' + box4.textContent + '"]');
        var button5 = document.querySelector('button[value="' + box5.textContent + '"]');

        j++;
        i = 1;

        function handleBox(box, index, button) {


            setTimeout(function () {
                box.classList.add('flip');
                if (answer.includes(box.textContent) && answer[index] === box.textContent) {
                    answerFrequency[box.textContent]--;
                    box.style.backgroundColor = "#538d4e";
                    box.style.border = "2px solid #538d4e";
                    button.style.backgroundColor = "#538d4e";
                    button.style.border = "2px solid #538d4e";
                } else if (answer.includes(box.textContent)) {
                    if (answerFrequency[box.textContent] > 0) {
                        box.style.backgroundColor = "#b59f3b";
                        box.style.border = "2px solid #b59f3b";
                        answerFrequency[box.textContent]--;
                    }
                    else {
                        box.style.backgroundColor = "#3a3a3c";
                        box.style.border = "2px solid #3a3a3c";
                    }
                    if (getComputedStyle(button).backgroundColor !== 'rgb(83, 141, 78)') {
                        button.style.backgroundColor = "#b59f3b";
                        button.style.border = "2px solid #b59f3b";
                    }
                } else {
                    box.style.backgroundColor = "#3a3a3c";
                    box.style.border = "2px solid #3a3a3c";
                    button.style.backgroundColor = "#3a3a3c";
                    button.style.border = "2px solid #3a3a3c";
                }
            }, index * 500);
        }


        handleBox(box1, 0, button1);
        handleBox(box2, 1, button2);
        handleBox(box3, 2, button3);
        handleBox(box4, 3, button4);
        handleBox(box5, 4, button5);

        setTimeout(function () {
            animationInProgress = false;
        }, 2500)
        var row6box1 = document.querySelector('.row-6 .box1');
        var row6box2 = document.querySelector('.row-6 .box2');
        var row6box3 = document.querySelector('.row-6 .box3');
        var row6box4 = document.querySelector('.row-6 .box4');
        var row6box5 = document.querySelector('.row-6 .box5');


        if (answer[0] == box1.textContent && answer[1] == box2.textContent && answer[2] == box3.textContent && answer[3] == box4.textContent && answer[4] == box5.textContent) {

            setTimeout(function () {
                gameEnded = true;
                var victory = document.querySelector('.victory');
                victory.style.display = 'block';
                victory.style.animationPlayState = 'running';

            }, 2500);

            return;
        }
        else if (row6box1.textContent && row6box2.textContent && row6box3.textContent && row6box4.textContent && row6box5.textContent) {
            setTimeout(function () {
                gameEnded = true;
                var loss = document.querySelector('.loss')
                loss.style.display = 'block';
                loss.style.animationPlayState = 'running';


            }, 2500);
            return;
        }
    }



});
