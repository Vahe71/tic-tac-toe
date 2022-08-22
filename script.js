const exit = document.querySelector('.menu .controls .exit');
exit.onclick = () => window.close();
const menu = document.querySelector('.menu');
const start = document.querySelector('.menu .controls .start');
start.onclick = () => {
    menu.style.top = '100%';
    zroyacum();
}
const infoButton = document.querySelector('.menu .btn.info');
const info = document.querySelector('.infoMenu');
const backInfo = document.querySelector('.infoMenu .backInfo');
const backInfoSpan = document.querySelector('.infoMenu .backInfo span');
const game = document.querySelector('.game');
const box = document.querySelectorAll('.game .XO .box');
const replace = document.querySelector('.game .replace');
const winner = document.querySelector('.game .winner');
const h2 = document.querySelector('.game .winner h2');
const X = document.querySelector('.game table .X td');
const O = document.querySelector('.game table .O td');
const N = document.querySelector('.game table .N td');
const itog = document.querySelector('.game .itog');
const itogWinner = document.querySelector('.game .itog .itogWinner');
const itogReplace = document.querySelector('.itog .replace');
const table = document.querySelector('.game table');
const tableArrow = document.querySelector('.game .arrow');
const exitGame = document.querySelector('.game .exit');

let current = 0;
let sumX = 0;
let sumO = 0;
let draw = 0;
for (let i = 0; i < box.length; i++) {
    box[i].onclick = () => {
        box[i].style.pointerEvents = 'none';
        if (current % 2 == 0) {
            box[i].innerText = 'X';
        } else {
            box[i].innerText = 'O';
        }
        
        if (box[0].innerText == 'X' && box[1].innerText == 'X' && box[2].innerText == 'X' || box[3].innerText == 'X' && box[4].innerText == 'X' && box[5].innerText == 'X' || box[6].innerText == 'X' && box[7].innerText == 'X' && box[8].innerText == 'X' || box[0].innerText == 'X' && box[3].innerText == 'X' && box[6].innerText == 'X' || box[1].innerText == 'X' && box[4].innerText == 'X' && box[7].innerText == 'X' || box[2].innerText == 'X' && box[5].innerText == 'X' && box[8].innerText == 'X' || box[0].innerText == 'X' && box[4].innerText == 'X' && box[8].innerText == 'X' || box[2].innerText == 'X' && box[4].innerText == 'X' && box[6].innerText == 'X') {
            sumX++;
            X.innerText = `X - ${sumX}`;
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "none";                        
            }
            h2.innerText = `Հաղթեց X - ը`;
            if (sumX != 5) {
                winner.style.left = 0;
            }

        } else if (box[0].innerText == 'O' && box[1].innerText == 'O' && box[2].innerText == 'O' || box[3].innerText == 'O' && box[4].innerText == 'O' && box[5].innerText == 'O' || box[6].innerText == 'O' && box[7].innerText == 'O' && box[8].innerText == 'O' || box[0].innerText == 'O' && box[3].innerText == 'O' && box[6].innerText == 'O' || box[1].innerText == 'O' && box[4].innerText == 'O' && box[7].innerText == 'O' || box[2].innerText == 'O' && box[5].innerText == 'O' && box[8].innerText == 'O' || box[0].innerText == 'O' && box[4].innerText == 'O' && box[8].innerText == 'O' || box[2].innerText == 'O' && box[4].innerText == 'O' && box[6].innerText == 'O') {
            sumO++;
            O.innerText = `O - ${sumO}`;
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "none";
            }
            h2.innerText = `Հաղթեց O - ն`;
            if (sumO != 5) {
                winner.style.left = 0;
            }

        } else if (current == 8) {
            draw++;
            N.innerText = `Ոչ ոքի - ${draw}`;
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "none";                        
            }
            winner.style.left = 0;
            h2.innerText = 'Ոչ ոքի';
        }
        current++;
        
        
        if (sumX == 5) {
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "none";
                itog.style.transform = 'rotateX(0)';
                itogWinner.innerText = 'X';
            }
        } else if (sumO == 5) {
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "none";
                itog.style.transform = 'rotateX(0)';
                itogWinner.innerText = 'X';
            }
        }
        
        
        itogReplace.onclick = () => {
            itog.style.transform = 'rotateX(-90deg)';
            for (let i = 0; i < box.length; i++) {
                box[i].style.pointerEvents = "auto";
                box[i].innerText = '';
            }
            current = 0;
            sumO = 0;
            sumX = 0;
            draw = 0;
            X.innerText = `X - ${sumX}`;
            O.innerText = `O - ${sumO}`;
            N.innerText = `Ոչ ոքի - 0`;
        }
    };
}
// onmousewheel
replace.onclick = () => {
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = '';
        box[i].style.pointerEvents = 'auto';
        current = 0;
    }
    winner.style.left = '100%';
}

let tableCurrent = 0;
tableArrow.onclick = () => {
    tableCurrent++;
    if (tableCurrent % 2 == 0) {
        table.style.right = '-100%';
        tableArrow.style.transform = 'rotate(180deg)';
        tableArrow.style.right = '2%';
    } else {
        table.style.right = '2%';
        tableArrow.style.transform = 'rotate(0deg)';
        tableArrow.style.right = '17%';
    }
}

exitGame.onclick = function() {
    menu.style.top = '0';
    zroyacum();
    winner.style.left = '100%';
}
function zroyacum() {
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = '';
        box[i].style.pointerEvents = 'auto';
    }
    sumX = 0;
    sumO = 0;
    current = 0;
    X.innerText = `X - ${sumX}`;
    O.innerText = `O - ${sumO}`;
    tableCurrent = 0;
    table.style.right = '-100%';
    tableArrow.style.transform = 'rotate(180deg)';
    tableArrow.style.right = '2%';
}
let boolArrow = true;
game.onmousewheel = e => {
    table.style.right = e.deltaY < 0 ? 0 : '-200px';
    if (boolArrow == true) {
        tableArrow.style.transform = 'rotate(0deg)';
        tableArrow.style.right = '17%'
    } else {
        tableArrow.style.transform = 'rotate(180deg)';
        tableArrow.style.right = '2%';
    }
    boolArrow = !boolArrow;
}

infoButton.onclick = () => {
    info.style.top = '0';
}
backInfo.onclick = () => {
    info.style.top = '100%';
}







// backInfo
// backInfoSpan



