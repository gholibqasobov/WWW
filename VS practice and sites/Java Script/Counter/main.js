let countEl = document.getElementById("count-el");
let saved = document.getElementById("saved-num");
let countNum = 0;
function onClick() {
    countNum ++;
    countEl.textContent = countNum;
}

function savedNum() {
    saved.textContent += countNum + " - ";
    countNum = 0;
    countEl.textContent = 0;
    
}