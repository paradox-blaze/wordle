// var i = 1;
// var j = 1;

// document.addEventListener('keydown', function (event) {
//     if (j > 6) {
//      return;       
//     }
//     var box = document.querySelector('.row-' + j + ' .box' + i);
//     if(event.key.match(/[^a-z|^A-Z]{1}/g)){
//         event.key = event.key.replace(/[^a-z|^A-Z]{1}/g,'');
//     }
//     if (event.key.match(/[a-z|A-Z]/g)) {
//         var a = event.key.toUpperCase();
//         box.textContent = a;
//         i++;
//     }

//     if (event.key === 'Backspace' && i > 1) {
//         i--;
//         box = document.querySelector('.row-' + j + ' .box' + i);
//         box.textContent = '';
//     }

//     if (i === 5 && event.key === 'Enter' && box.textContent) {
//         j++;
//         i = 1;


//     }
// });


var i = 1;
var j = 1;
var moveNext = false;

document.addEventListener('keydown', function (event) {
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


    if (event.key === 'Enter' && i >= 5) {
        j++;
        i = 1;
    }
});
