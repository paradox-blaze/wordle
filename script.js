var answer = "JOKER"

var i = 1;
var j = 1;
var moveNext = false;


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

        if (answer.includes(box1.textContent) && answer[0] === box1.textContent) {
            box1.style.backgroundColor = "#538d4e";
            box1.style.border = "2px solid #538d4e";
        }

        else if (answer.includes(box1.textContent)) {
            box1.style.backgroundColor = "#b59f3b";
            box1.style.border = "2px solid #b59f3b";
        }

        else {
            box1.style.backgroundColor = "#3a3a3c";
            box1.style.border = "2px solid #3a3a3c"
        }



        if (answer.includes(box2.textContent) && answer[1] === box2.textContent) {
            box2.style.backgroundColor = "#538d4e";
            box2.style.border = "2px solid #538d4e";
        }

        else if (answer.includes(box2.textContent)) {
            box2.style.backgroundColor = "#b59f3b";
            box2.style.border = "2px solid #b59f3b";
        }

        else {
            box2.style.backgroundColor = "#3a3a3c";
            box2.style.border = "2px solid #3a3a3c"
        }




        if (answer.includes(box3.textContent) && answer[2] === box3.textContent) {
            box3.style.backgroundColor = "#538d4e";
            box3.style.border = "2px solid #538d4e";
        }

        else if (answer.includes(box3.textContent)) {
            box3.style.backgroundColor = "#b59f3b";
            box3.style.border = "2px solid #b59f3b";
        }

        else {
            box3.style.backgroundColor = "#3a3a3c";
            box3.style.border = "2px solid #3a3a3c"
        }



        if (answer.includes(box4.textContent) && answer[3] === box4.textContent) {
            box4.style.backgroundColor = "#538d4e";
            box4.style.border = "2px solid #538d4e";
        }

        else if (answer.includes(box4.textContent)) {
            box4.style.backgroundColor = "#b59f3b";
            box4.style.border = "2px solid #b59f3b";
        }

        else {
            box4.style.backgroundColor = "#3a3a3c";
            box4.style.border = "2px solid #3a3a3c"
        }



        if (answer.includes(box5.textContent) && answer[4] === box5.textContent) {
            box5.style.backgroundColor = "#538d4e";
            box5.style.border = "2px solid #538d4e";
        }

        else if (answer.includes(box5.textContent)) {
            box5.style.backgroundColor = "#b59f3b";
            box5.style.border = "2px solid #b59f3b";
        }

        else {
            box5.style.backgroundColor = "#3a3a3c";
            box5.style.border = "2px solid #3a3a3c"
        }

        if (answer[0] == box1.textContent && answer[1] == box2.textContent && answer[2] == box3.textContent && answer[3] == box4.textContent && answer[4] == box5.textContent) {
            return;
        }

        j++;
        i = 1;
    }
});


