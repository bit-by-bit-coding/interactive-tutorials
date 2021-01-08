// script.js
// by Praveer Sharan

let dancer = document.getElementById("dancer");
let executeButton = document.getElementById("execute-button");
let stopButton = document.getElementById("stop-button");
let inputJump = document.getElementById("inputJump");
let inputSpeed = document.getElementById("inputSpeed");
let inputTime = document.getElementById("inputTime");
let warning1 = document.getElementById("warning1");
let warning2 = document.getElementById("warning2");
let warning3 = document.getElementById("warning3");
let spinner = document.getElementById("spinner");
let codeLine = document.getElementById("codeLine");
let stopWatch = document.getElementById("stopWatch");
let jumpDisplay = document.getElementById("jumpDisplay");
let speedDisplay = document.getElementById("speedDisplay");
let timeDisplay = document.getElementById("timeDisplay");
let sections = document.getElementsByClassName("section");
let easterEggIMG = document.getElementById("easter-egg-svg");
let easterEggSVG = SVG("#easter-egg-svg");
let danceArena = document.getElementById("danceArena");
let speed = 15;
let posX = 0;
let posY = 0;
let velocityX = Math.pow(1.1225, speed);
let velocityY = speed;
let height = 290;
let gravity = 0.5 * velocityY * velocityY / height;
let timer = 0;
let time = 3;
let dancing;

function easterEgg() {
    document.body.style.backgroundColor = "black";
    easterEggIMG.style.opacity = "1.0";
    easterEggSVG.find(".egg").fill("#fafafa");
    easterEggSVG.find(".stars").children().fill("pink");
    easterEggSVG.find(".dots").children().fill("lightblue");
    setTimeout(function() {
        dancer.style.left = "5px";
        dancer.style.top = "5px";
    }, 11);
    dialog();
}

function danceMove() {
    stopWatch.innerText = "Time remaining: " + Math.floor((time - timer) * 100) / 100 + " sec";
    spinner.style.opacity = 1.0;
    if (timer >= 15) {
        stop();
        easterEgg();
    }
    if (timer >= time)
        stop();
    posX += velocityX;
    posY += velocityY;
    velocityY -= gravity;
    dancer.style.left = (5 + posX) + "px";
    dancer.style.top = (295 - posY) + "px";
    if (posY <= 0) {
        posY = 0;
        velocityY = speed;
    }
    if (posX >= window.innerWidth * 0.56 - 100) {
        velocityX *= -1;
        posX = window.innerWidth * 0.56 - 100;
    }
    if (posX <= 0) {
        velocityX *= -1;
        posX = 0;
    }
    timer += 0.01;
}

function verify() {
    if (parseFloat(inputJump.value) < 0 || parseFloat(inputJump.value) > 290)
        warning1.innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> Whoa! This may work, but I might trip up if the jump isn't kept between 0 and 290!";
    else
        warning1.innerHTML = "";
    if (parseFloat(inputSpeed.value) < 0 || parseFloat(inputSpeed.value) > 36)
        warning2.innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> Whoa! This may work, but I might trip up if the speed isn't kept between 0 and 36!";
    else
        warning2.innerHTML = "";
    if (parseFloat(inputTime.value) <= 0)
        warning3.innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> Whoa! You won't see me dance if I have less than 0.1 seconds!";
    else if (parseFloat(inputTime.value) >= 15)
        warning3.innerHTML = "<i class=\"fas fa-exclamation-triangle\"></i> Hm... no complaints or anything, but that's quite a while..."; // BUT JUST LONG ENOUGH FOR THE EASTER EGG!!!
    else
        warning3.innerHTML = "";
}

function stop() {
    clearInterval(dancing);
    spinner.style.opacity = 0.0;
    codeLine.innerHTML = "N/A";
    stopWatch.innerText = "";
    jumpDisplay.innerText = "";
    speedDisplay.innerText = "";
    timeDisplay.innerText = "";
}

inputJump.onkeyup = verify;
inputSpeed.onkeyup = verify;
inputTime.onkeyup = verify;
inputJump.onchange = verify;
inputSpeed.onchange = verify;
inputTime.onchange = verify;

executeButton.onclick = function() {
    stop();
    document.body.style.backgroundColor = "white";
    easterEggIMG.style.opacity = "0.0";
    jumpDisplay.innerText = inputJump.value;
    speedDisplay.innerText = inputSpeed.value;
    timeDisplay.innerText = inputTime.value;
    posX = 0;
    posY = 0;
    height = parseFloat(inputJump.value);
    speed = parseFloat(inputSpeed.value);
    time = parseFloat(inputTime.value);
    velocityX = Math.pow(1.1225, speed);
    velocityY = speed;
    gravity = 0.5 * velocityY * velocityY / height;
    timer = 0;
    codeLine.innerHTML = "danceRobot(<span style=\"color:red\">" + inputJump.value + "</span>, <span style=\"color:blue\">" + inputSpeed.value + "</span>, <span style=\"color:green\">" + inputTime.value + "</span>);";
    dancing = setInterval(danceMove, 10);
}

stopButton.onclick = function() {
    document.body.style.backgroundColor = "white";
    easterEggIMG.style.opacity = "0.0";
    dancer.style.left = "5px";
    dancer.style.top = "295px";
    stop();
}

function dialog() {
    document.getElementById("message").innerHTML = "I'M EXHAUSTED. You win. You've found the EASTER EGG.<br><br>(Click \"Close\" to exit.)";
    $(".ui-dialog").css("background", "linear-gradient(to right, #307bdd, #00F)");
    $( function() {
      $( "#dialog" ).dialog();
    });
}