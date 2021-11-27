let quizButton2 = document.getElementById("quiz2");
let select21 = document.getElementById("quiz2-1");
let select22 = document.getElementById("quiz2-2");
let select23 = document.getElementById("quiz2-3");
let select24 = document.getElementById("quiz2-4");
let error2 = document.getElementById("pErrorQuiz2");

quizButton2.onclick = function(event) {
    if (select21.value != "rose") {
        error2.innerText = "The first select box is incorrect";
        error2.style = "color: red;";
        return;
    } 
    if (select22.value != "tulip") {
        error2.innerText = "The second select box is incorrect";
        error2.style = "color: red;";
        return;
    } 
    if (select23.value != "daffodil") {
        error2.innerText = "The third select box is incorrect";
        error2.style = "color: red;";
        return;
    } 
    if (select24.value != "rose") {
        error2.innerText = "The fourth select box is incorrect";
        error2.style = "color: red;";
        return;
    } 
    error2.innerText = "Congratulations! You got it right!";
    error2.style = "color: green;";
};