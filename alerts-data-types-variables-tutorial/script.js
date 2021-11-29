let alertElement = document.getElementById("alert");

function alertCode() {
  alert("Hello World!");
  alert(5);
  alert(true);
}

alertElement.onclick = alertCode;

let stringElement = document.getElementById("strings");

function stringsCode() {
  alert("Hello World!");
  alert("This is a string. It is words. Isn't it amazing");
  alert(
    "This is string number 3. It can have numbers and the words true or false"
  );
}

stringElement.onclick = stringsCode;

let numbersElement = document.getElementById("numbers");

function numbersCode() {
  alert(25);
  alert(7 * 3);
  alert(5 + 4 / 2);
}

numbersElement.onclick = numbersCode;

let booleanElement = document.getElementById("boolean");

function booleanCode() {
  alert(true);
  alert(1 > 2);
  alert(25 < 78);
}

booleanElement.onclick = booleanCode;

let variableElement = document.getElementById("variable");

function variableCode() {
  let greeting = "Hello! Nice to meet you";
  alert(greeting);

  let appleNumber = 10;
  alert(appleNumber);

  let bigDog = false;
  alert(bigDog);
}

variableElement.onclick = variableCode;

let pointsElement = document.getElementById("points");

// done game
let doneFunction = function () {
    alert("Done!");
};

//Game code alerts:
let pGameElement = document.getElementById("gameCode");
let buildingCodeElement = document.getElementById("buildingCode");

let optionOne = document.getElementById("option1");
let optionTwo = document.getElementById("option2");
let optionThree = document.getElementById("option3");

let point = 0;

function wrong() {
  point--;
  pGameElement.innerText = "Whoops, wrong guess, try again";
}

function alertComplete() {
  point++;
  buildingCodeElement.innerText = 'alert("Happy Birthday");';

  pGameElement.innerText =
    "Congrats, you completed the alert! You got " + point + " points!";

  function runAlertCode() {
    alert("Happy Birthday");
  }

  optionOne.innerText = " ";
  optionTwo.innerText = "Run code";
  optionThree.innerText = " ";

  optionOne.onclick = doneFunction;
  optionTwo.onclick = runAlertCode;
  optionThree.onclick = doneFunction;

  pointsElement.innerText = "Points: " + point + "/10";
}

function twoCorrect() {
  point++;
  buildingCodeElement.innerText = "alert();";

  pGameElement.innerText =
    "Correct! Now, if I want my alert to alert the words: 'Happy Birthday', what should go inside the parentheses";

  optionOne.innerText = "Happy Birthday";
  optionTwo.innerText = "'Happy Birthday";
  optionThree.innerText = '"Happy Birthday"';

  optionThree.onclick = alertComplete;
  optionOne.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

function oneCorrect() {
  point++;
  buildingCodeElement.innerText = "alert";

  pGameElement.innerText = "Correct! What is the next part of my alert?";

  optionOne.innerText = "( );";
  optionTwo.innerText = "{ };";
  optionThree.innerText = "< >;";

  optionOne.onclick = twoCorrect;
  optionThree.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

function startGame() {
  pGameElement.innerText = "How do you start an alert?";

  optionOne.innerText = "let";
  optionTwo.innerText = '""';
  optionThree.innerText = "alert";

  optionThree.onclick = oneCorrect;
  optionTwo.onclick = wrong;
  optionOne.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

optionTwo.onclick = startGame;

//Game code: Data types
let pGame2Element = document.getElementById("gameCode2");
let buildingCode2Element = document.getElementById("buildingCode2");

let optionOne2 = document.getElementById("option4");
let optionTwo2 = document.getElementById("option5");
let optionThree2 = document.getElementById("option6");

function wrong2() {
  point--;
  pGame2Element.innerText = "Whoops, wrong guess, try again";
}

function dataTypeComplete() {
  point++;
  buildingCode2Element.innerHTML =
    'alert(8); <br> alert("String, 5, true"); <br> alert(5 > 9);';

  pGame2Element.innerText =
    "Congrats, you completed the data types practice! You got " +
    point +
    " points!";

  function runDataTypeCode() {
    alert(8);
    alert("String, 5, true");
    alert(5 > 9);
  }

  optionOne2.innerText = " ";
  optionTwo2.innerText = "Run code";
  optionThree2.innerText = " ";

  optionOne2.onclick = doneFunction;
  optionTwo2.onclick = runDataTypeCode;
  optionThree2.onclick = doneFunction;

  pointsElement.innerText = "Points: " + point + "/10";
}

function fourCorrect() {
  point++;
  buildingCode2Element.innerHTML =
    'alert(8); <br> alert("String, 5, true"); <br> alert(*boolean*);';

  pGame2Element.innerText =
    "Correct! Last but not least, which of these is a boolean value?";

  optionOne2.innerText = "5 > 9";
  optionTwo2.innerText = "None, they are all wrong";
  optionThree2.innerText = '"true"';

  optionOne2.onclick = dataTypeComplete;
  optionThree2.onclick = wrong2;

  pointsElement.innerText = "Points: " + point + "/10";
}

function threeCorrect() {
  point++;
  buildingCode2Element.innerHTML =
    "alert(8); <br> alert(*string*); <br> alert(*boolean*);";

  pGame2Element.innerText = "Correct! Which one of these things is a string?";

  optionOne2.innerText = "(This is a string)";
  optionTwo2.innerText = "true";
  optionThree2.innerText = '"String, 5, true"';

  optionThree2.onclick = fourCorrect;
  optionTwo2.onclick = wrong2;

  pointsElement.innerText = "Points: " + point + "/10";
}

function startGame2() {
  pGame2Element.innerText = "Which of these is a numbers data type?";
  buildingCode2Element.innerHTML =
    "alert(*number*); <br> alert(*string*); <br> alert(*boolean*);";

  optionOne2.innerText = '"3"';
  optionTwo2.innerText = "8";
  optionThree2.innerText = "5 > 2";

  optionThree2.onclick = wrong2;
  optionTwo2.onclick = threeCorrect;
  optionOne2.onclick = wrong2;

  pointsElement.innerText = "Points: " + point + "/10";
}

optionTwo2.onclick = startGame2;

//Game code: Variables
let pGame3Element = document.getElementById("gameCode3");
let buildingCode3Element = document.getElementById("buildingCode3");

let optionOne3 = document.getElementById("option7");
let optionTwo3 = document.getElementById("option8");
let optionThree3 = document.getElementById("option9");

function wrong3() {
  point--;
  pGame3Element.innerText = "Whoops, wrong guess, try again";
}

function variableComplete() {
  point++;
  buildingCode3Element.innerHTML =
    "let variableName = 10 + 21; <br> alert(variableName);";

  pGame3Element.innerText =
    "Congrats, you completed the variable practice! You got " +
    point +
    " points!";

  function runVariableCode() {
    let variableName = 10 + 21;
    alert(variableName);
  }

  optionOne3.innerText = " ";
  optionTwo3.innerText = "Run code";
  optionThree3.innerText = " ";

  optionOne3.onclick = doneFunction;
  optionTwo3.onclick = runVariableCode;
  optionThree3.onclick = doneFunction;

  pointsElement.innerText = "Points: " + point + "/10";
}

function sevenCorrect() {
  point++;
  buildingCode3Element.innerText = "let variableName = 10 + 21;";

  pGame3Element.innerText = "Correct! How do you alert this variable?";

  optionOne3.innerText = "alert(variableName)";
  optionTwo3.innerText = 'alert("variableName");';
  optionThree3.innerText = "alert(variableName);";

  optionThree3.onclick = variableComplete;
  optionTwo3.onclick = wrong3;

  pointsElement.innerText = "Points: " + point + "/10";
}

function sixCorrect() {
  point++;
  buildingCode3Element.innerText = "let variableName = ";

  pGame3Element.innerText =
    "Correct! Which of these is a possible value for my variable?";

  optionOne3.innerText = "true, 5, words";
  optionTwo3.innerText = "10 + 21";
  optionThree3.innerText = '"Hello " world';

  optionTwo3.onclick = sevenCorrect;
  optionOne3.onclick = wrong3;

  pointsElement.innerText = "Points: " + point + "/10";
}

function fiveCorrect() {
  point++;
  buildingCode3Element.innerText = "let ";

  pGame3Element.innerText =
    "Correct! What is the next step in creating a variable?";

  optionOne3.innerText = "variableName = ";
  optionTwo3.innerText = "variableName()";
  optionThree3.innerText = "= ()";

  optionOne3.onclick = sixCorrect;

  pointsElement.innerText = "Points: " + point + "/10";
}

function startGame3() {
  pGame3Element.innerText = "How do you start a variable?";

  optionOne3.innerText = "let";
  optionTwo3.innerText = "variable";
  optionThree3.innerText = "=";

  optionThree3.onclick = wrong3;
  optionTwo3.onclick = wrong3;
  optionOne3.onclick = fiveCorrect;

  pointsElement.innerText = "Points: " + point + "/10";
}

optionTwo3.onclick = startGame3;
