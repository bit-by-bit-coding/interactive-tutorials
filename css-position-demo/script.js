// can't get the element from the iframe!!!
let bot = document.getElementById("explore-display").contentWindow.document.getElementById("bit-by-bot");
let balloon = document.getElementById("explore-display").contentWindow.document.getElementById("balloon");

let botPosition = document.getElementById("bot-position");
let botXDirection = document.getElementById("bot-x-direction");
let boxXValue = document.getElementById("bot-x-value");
let botYDirection = document.getElementById("bot-y-direction");
let botYValue = document.getElementById("bot-y-value");

let balloonPosition = document.getElementById("balloon-position");
let balloonXDirection = document.getElementById("balloon-x-direction");
let ballonXValue = document.getElementById("balloon-x-value");
let balloonYDirection = document.getElementById("balloon-y-direction");
let ballonYValue = document.getElementById("balloon-y-value");

function setBotPositionProperty() {
    bot.style.position = botPosition.value;
}

function setBalloonPositionProperty() {
    balloon.style.position = balloonPosition.value;
}

