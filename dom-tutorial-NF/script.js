let pointsElement = document.getElementById("points");

//Game code alerts:
let pGameElement = document.getElementById("gameCode");
let buildingCodeElement = document.getElementById("buildingCodeHTML");
let buildingJavaScriptElement = document.getElementById(
  "buildingCodeJavaScript"
);

let optionOne = document.getElementById("option1");
let optionTwo = document.getElementById("option2");
let optionThree = document.getElementById("option3");

let point = 0;

function wrong() {
  point--;
  pointsElement.innerText = "Points: " + point + "/10";
  pGameElement.innerText = "Whoops, wrong guess, try again";
}

function doneFunction() {
    alert("Done!");
}

function DOMComplete() {
  point++;
  buildingCodeElement.innerText = '<p id="element">This is an element</p>';
  buildingJavaScriptElement.innerText =
    'let pElement = document.getElementById("element")';

  pGameElement.innerText =
    "Congrats, you finished creating a variable using the DOM! You got " +
    point +
    " points!";

  optionOne.innerText = " ";
  optionTwo.innerText = "";
  optionThree.innerText = " ";

  optionOne.onclick = doneFunction;
  optionTwo.onclick = doneFunction;
  optionThree.onclick = doneFunction;

  pointsElement.innerText = "Points: " + point + "/10";
}

function DOMthreeCorrect() {
  point++;
  buildingCodeElement.innerText = '<p id="element">This is an element</p>';
  buildingJavaScriptElement.innerText =
    "let pElement = document.getElementById()";

  pGameElement.innerText = "Correct! What goes inside the parentheses?";

  optionOne.innerText = '"element"';
  optionTwo.innerText = "element";
  optionThree.innerText = 'id="element"';

  optionOne.onclick = DOMComplete;

  pointsElement.innerText = "Points: " + point + "/10";
}

function twoCorrect() {
  point++;
  buildingCodeElement.innerText = '<p id="element">This is an element</p>';
  buildingJavaScriptElement.innerText = "let pElement = ";

  pGameElement.innerText = "Correct! What do we type next?";

  optionOne.innerText = "document.getElementById();";
  optionTwo.innerText = "document.getElementByClass();";
  optionThree.innerText = 'document.getElementById"";';

  optionOne.onclick = DOMthreeCorrect;
  optionTwo.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

function oneCorrect() {
  point++;
  buildingCodeElement.innerText = '<p id="element">This is an element</p>';

  pGameElement.innerText =
    "Correct! What do we do in JavaScript to create an HTML element variable?";

  optionOne.innerText = "let document.getElementById() = ";
  optionTwo.innerText = "let pElement = ";
  optionThree.innerText = "document.getElementById() = ";

  optionTwo.onclick = twoCorrect;
  optionOne.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

function startGame() {
  buildingCodeElement.innerText = "<p>This is an element</p>";
  pGameElement.innerText =
    "What do you use to call an HTML element in JavaScript?";

  optionOne.innerText = "id";
  optionTwo.innerText = "class";
  optionThree.innerText = "Come here element! Come here!";

  optionOne.onclick = oneCorrect;
  optionTwo.onclick = wrong;
  optionThree.onclick = wrong;

  pointsElement.innerText = "Points: " + point + "/10";
}

optionTwo.onclick = startGame;

//Game code: New Code
/*
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

  optionOne2.onclick = dataTypeComplete;
  optionTwo2.onclick = runDataTypeCode;
  optionThree2.onclick = dataTypeComplete;

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
  pGame2Element.innerText = "What does: .onclick do?";
  buildingCode2Element.innerHTML = "buttonElement.onclick = functionName;";

  optionOne2.innerText = "Do something when element is clicked";
  optionTwo2.innerText = "Nothing, it's wrong code";
  optionThree2.innerText = "On the click of the equal sign, something happens";

  optionThree2.onclick = threeCorrect;
  optionTwo2.onclick = wrong2;
  optionOne2.onclick = wrong2;

  pointsElement.innerText = "Points: " + point + "/10";
}

optionTwo2.onclick = startGame2;
*/
