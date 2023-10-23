var i = 1;
var j = 1;
var answer = "JOKER";


function getLetter(button) {
    var buttonValue = button.value;
    var event = new Event('keydown');
    event.key = buttonValue;
    document.dispatchEvent(event);
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

        var box1 = document.querySelector('.row-' + j + ' .box1');
        var box2 = document.querySelector('.row-' + j + ' .box2');
        var box3 = document.querySelector('.row-' + j + ' .box3');
        var box4 = document.querySelector('.row-' + j + ' .box4');


        function handleBox(box, index) {
            setTimeout(function () {
                box.classList.add('flip');
                if (answer.includes(box.textContent) && answer[index] === box.textContent) {
                    box.style.backgroundColor = "#538d4e";
                    box.style.border = "2px solid #538d4e";
                } else if (answer.includes(box.textContent)) {
                    box.style.backgroundColor = "#b59f3b";
                    box.style.border = "2px solid #b59f3b";
                } else {
                    box.style.backgroundColor = "#3a3a3c";
                    box.style.border = "2px solid #3a3a3c";
                }
            }, index * 500);
        }

        handleBox(box1, 0);
        handleBox(box2, 1);
        handleBox(box3, 2);
        handleBox(box4, 3);
        handleBox(box5, 4);

        if (answer[0] == box1.textContent && answer[1] == box2.textContent && answer[2] == box3.textContent && answer[3] == box4.textContent && answer[4] == box5.textContent) {
            return;
        }
        j++;
        i = 1;
    }
});
