let quizButton = document.getElementById("quiz1");
let select1 = document.getElementById("quiz1-1");
let select2 = document.getElementById("quiz1-2");
let select3 = document.getElementById("quiz1-3");
let select4 = document.getElementById("quiz1-4");
let select5 = document.getElementById("quiz1-5");
let select6 = document.getElementById("quiz1-6");
let error1 = document.getElementById("pErrorQuiz1");

quizButton.onclick = function(event) {
    if (select1.value != "red") {
        error1.innerText = "The first select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    if (select2.value != "cyan") {
        error1.innerText = "The second select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    if (select3.value != "green") {
        error1.innerText = "The third select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    if (select4.value != "magenta") {
        error1.innerText = "The fourth select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    if (select5.value != "orange") {
        error1.innerText = "The fifth select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    if (select6.value != "yellow") {
        error1.innerText = "The sixth select box is incorrect";
        error1.style = "color: red;";
        return;
    }
    error1.innerText = "Congratulations! You got it right!";
    error1.style = "color: green;";
};