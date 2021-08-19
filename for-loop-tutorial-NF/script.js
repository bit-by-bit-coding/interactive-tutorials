//Function run code
let forRunHelloWorldElement = document.getElementById("forRunHelloWorld");
let forRunNumbersElement = document.getElementById("forRunNumbers");
let forRunBlastOffElement = document.getElementById("forRunBlastOff");

let forHelloWorld = function () {
  for (let i = 0; i < 3; i = i + 1) {
    alert("Hello World!");
  }
}

let forNumbers = function() {
    for (let i = 5; i < 10; i = i + 1) {
        alert(i);
      }
}

let forBlastOff = function() {
    for (let i = 3; i >= 0; i--) {
        if (i === 0) {
          alert("Blast off!");
        } else {
          alert(i);
        }
      }
}

forRunHelloWorldElement.onclick = forHelloWorld;
forRunNumbersElement.onclick = forNumbers;
forRunBlastOffElement.onclick = forBlastOff;

/*
let visualArray = ["let", "variableName", "=", "number;"];
let noSpaceValue = inputValue.replace(/ /g, "");
*/

//Building for loops
let buildingIntructions = document.getElementById("buildingIntructions");
let pBuildingElement = document.getElementById("buildingP");
let inputBuilding = document.getElementById("inputBuilding");
let buttonBuilding = document.getElementById("buildingButton");

let conditionOne = "";
let conditionTwo = "";
let conditionThree = "";
let insideCode = "";
let variableName = "";
let finishedCodeVariable = "";

let inputNumberOne = "";
let inputNumberTwo = "";
let numDifference = "";
//Need = i > number;

let finalStepLoop = function () {
  finishedCodeVariable =
    "for(" +
    String(conditionOne) +
    " " +
    String(conditionTwo) +
    " " +
    String(conditionThree) +
    " ){" +
    String(insideCode) +
    "}";
  eval(finishedCodeVariable);
};

let stepSevenLoop = function () {
  let inputValue = inputBuilding.value;
  let variableCheck = inputValue.includes(variableName);

  let stringVariable = '"' + variableName + '"';
  let stringVariableCheck = inputValue.includes(stringVariable);

  let alertCheck = inputValue.includes("alert");
  let openParCheck = inputValue.includes("(");
  let closeParCheck = inputValue.includes(")");
  let semiCheck = inputValue.includes(";");

  if (stringVariableCheck) {
    buildingIntructions.innerText += "Make sure the data types are correct";
  } else if (
    variableCheck &&
    alertCheck &&
    openParCheck &&
    closeParCheck &&
    semiCheck
  ) {
    pBuildingElement.innerHTML =
      "for(" +
      conditionOne +
      " " +
      conditionTwo +
      " " +
      conditionThree +
      " ){<br>" +
      inputValue +
      "<br>}";
    buildingIntructions.innerText =
      "You finished the for loop! Congratulations. Click button below to run your code";
    buttonBuilding.onclick = finalStepLoop;
    insideCode = inputValue;
  } else {
    buildingIntructions.innerText =
      buildingIntructions.innerText + "Incorrect syntax, please try again.";
  }
  return insideCode;
};

let stepSixLoop = function () {
  let inputValue = inputBuilding.value;
  let openBracketCheck = inputValue.includes("{");
  let closeBracketCheck = inputValue.includes("}");

  if (openBracketCheck && closeBracketCheck) {
    pBuildingElement.innerHTML =
      "for(" +
      conditionOne +
      " " +
      conditionTwo +
      " " +
      conditionThree +
      " ){<br><br>}";
    buildingIntructions.innerText =
      "Correct! Now write code to alert the changing variable of the for loop (the variable you created at the very beginning)?";
    buttonBuilding.onclick = stepSevenLoop;
  } else {
    buildingIntructions.innerText =
      buildingIntructions.innerText + "Incorrect syntax, please try again.";
  }
};

let stepFiveLoop = function () {
  let inputValue = inputBuilding.value;

  let variableCheck = inputValue.includes(variableName);
  let equalCheck = inputValue.includes("=");
  let addCheck = inputValue.includes("+");
  let doubleAddCheck = inputValue.includes("++");
  let subtractCheck = inputValue.includes("-");
  let doubleMinusCheck = inputValue.includes("--");

  numDifference = inputNumberOne - inputNumberTwo;

  let correctSignCheck = false;

  if (numDifference > 0) {
    if (subtractCheck) {
      correctSignCheck = true;
    } else {
      correctSignCheck = false;
    }
  } else if (numDifference < 0) {
    if (addCheck) {
      correctSignCheck = true;
    } else {
      correctSignCheck = false;
    }
  } else {
    correctSignCheck = false;
  }

  function hasNumber(myString) {
    let check = /\d/.test(myString);
    return check;
  }

  let check1 = hasNumber(inputValue);

  if (variableCheck) {
    if (equalCheck) {
      if (correctSignCheck) {
        if (check1) {
          pBuildingElement.innerHTML =
            "for(" +
            conditionOne +
            " " +
            conditionTwo +
            " " +
            inputValue +
            " )";
          buildingIntructions.innerText =
            "Correct! What comes after our parenthese for our for loop?";
          buttonBuilding.onclick = stepSixLoop;
          conditionThree = inputValue;
        } else {
          buildingIntructions.innerText =
            buildingIntructions.innerText +
            "Incorrect syntax, please try again.";
        }
      } else {
        buildingIntructions.innerText =
          buildingIntructions.innerText + "Incorrect syntax, please try again.";
      }
    } else if (correctSignCheck) {
      if (doubleAddCheck) {
        pBuildingElement.innerHTML =
          "for(" + conditionOne + " " + conditionTwo + " " + inputValue + " )";
        buildingIntructions.innerText =
          "Correct! What comes after our parenthese for our for loop?";
        buttonBuilding.onclick = stepSixLoop;
        conditionThree = inputValue;
      } else if (doubleMinusCheck) {
        pBuildingElement.innerHTML =
          "for(" + conditionOne + " " + conditionTwo + " " + inputValue + " )";
        buildingIntructions.innerText =
          "Correct! What comes after our parenthese for our for loop?";
        buttonBuilding.onclick = stepSixLoop;
        conditionThree = inputValue;
      } else {
        buildingIntructions.innerText =
          buildingIntructions.innerText + "Incorrect syntax, please try again.";
      }
    } else {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Incorrect syntax, please try again.";
    }
  } else {
    buildingIntructions.innerText =
      buildingIntructions.innerText + "Incorrect syntax, please try again.";
  }
  return conditionThree;
};

let stepFourLoop = function () {
  let inputValue = inputBuilding.value;
  let inputValueAsArray = inputValue.split(" ");

  let lessRemoveCheck = inputValue.includes(">");
  let greaterRemoveCheck = inputValue.includes("<");
  let equalRemoveCheck = inputValue.includes("=");

  let numOnlyNoSign = "";
  let numOnlyNoEuqal = "";
  let numOnlyOne = "";

  if (lessRemoveCheck) {
    numOnlyNoSign = inputValue.replace(">", "");
  } else if (greaterRemoveCheck) {
    numOnlyNoSign = inputValue.replace("<", "");
  }

  if (equalRemoveCheck) {
    numOnlyNoEuqal = numOnlyNoSign.replace("=", "");
    numOnlyOne = numOnlyNoEuqal.replace(String(variableName), "");
  } else {
    numOnlyOne = numOnlyNoSign.replace(String(variableName), "");
  }

  let numOnlyTwo = numOnlyOne.replace(";", "");

  inputNumberTwo = Number(numOnlyTwo);

  numDifference = inputNumberOne - inputNumberTwo;

  let correctSignCheck = false;

  if (numDifference > 0) {
    if (lessRemoveCheck) {
      correctSignCheck = true;
    } else {
      correctSignCheck = false;
    }
  } else if (numDifference < 0) {
    if (greaterRemoveCheck) {
      correctSignCheck = true;
    } else {
      correctSignCheck = false;
    }
  } else {
    correctSignCheck = false;
  }

  if (inputValueAsArray.length < 3) {
    let letCheck = inputValue.includes(variableName);
    let semiCheck = inputValue.includes(";");

    function hasNumber(myString) {
      let check = /\d/.test(myString);
      return check;
    }

    let check1 = hasNumber(inputValue);
    alert(check1);

    if (!check1) {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Missing a number.";
    } else if (letCheck && correctSignCheck && semiCheck) {
      pBuildingElement.innerHTML =
        "for(" + conditionOne + " " + inputValue + " )";
      buildingIntructions.innerText =
        "Correct! What is the last thing we have inside the parathenses?";
      buttonBuilding.onclick = stepFiveLoop;
      conditionTwo = inputValue;
    } else {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Incorrect syntax, please try again.";
    }
  } else {
    let variableNameCheck = inputValueAsArray[0];
    let greaterLesserCheckArray = inputValueAsArray[1];
    let semiCheckArray = inputValueAsArray[2];

    let variableCheck = variableNameCheck.includes(variableName);
    let lessThanCheck = greaterLesserCheckArray.includes(">");
    let greaterThanCheck = greaterLesserCheckArray.includes("<");
    let semiCheck = semiCheckArray.includes(";");

    let greaterLesserCheck = "";

    if (lessThanCheck || greaterThanCheck) {
      greaterLesserCheck = true;
    }

    function hasNumber(myString) {
      let check = /\d/.test(myString);
      return check;
    }

    let check1 = hasNumber(inputValue);

    if (!check1) {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Missing a number.";
    } else if (
      variableCheck &&
      semiCheck &&
      greaterLesserCheck &&
      correctSignCheck
    ) {
      pBuildingElement.innerHTML =
        "for(" + conditionOne + " " + inputValue + " )";
      buildingIntructions.innerText =
        "Correct! What is the last thing we have inside the parathenses?";
      buttonBuilding.onclick = stepFiveLoop;
      conditionTwo = inputValue;
    } else {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Incorrect syntax, please try again.";
    }
  }
  return conditionTwo;
};

let stepThreeLoop = function () {
  let inputValue = inputBuilding.value;

  conditionOne = inputValue;
  let inputValueAsArray = inputValue.split(" ");

  if (inputValueAsArray.length < 4) {
    let letCheck = inputValue.includes("let");
    let equalCheck = inputValue.includes("=");
    let semiCheck = inputValue.includes(";");

    let variableNameTry = "";

    let letRemove = inputValue.replace("let", "");
    let equalRemove = letRemove.replace("=", "");
    let semiRemove = equalRemove.replace(";", "");
    let removeSpaceOne = semiRemove.replace(" ", "");
    let removeSpaceTwo = removeSpaceOne.replace(" ", "");
    variableNameTry = removeSpaceTwo;

    let numberArray = [];

    for (let i = 0; i < variableNameTry.length; i++) {
      let letterCheck = variableNameTry[i];
      function hasNumber(myString) {
        let check = /\d/.test(myString);
        return check;
      }

      let numberCheckValue = hasNumber(letterCheck);

      if (numberCheckValue) {
        numberArray.push(letterCheck);
      }
    }
    let madeNumber = "";

    for (let i = 0; i < numberArray.length; i++) {
      madeNumber += numberArray[i];
    }

    inputNumberOne = Number(madeNumber);

    let finalVariable = "";
    finalVariable = variableNameTry.replace(String(madeNumber), "");

    variableName = finalVariable;

    function hasNumber(myString) {
      let check = /\d/.test(myString);
      return check;
    }

    let check1 = hasNumber(inputValue);

    if (!check1) {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Missing a number.";
    } else if (letCheck && equalCheck && semiCheck) {
      pBuildingElement.innerHTML = "for(" + inputValue + ")";
      buildingIntructions.innerText =
        "Correct! What is the next thing we add to the parentheses?";
      buttonBuilding.onclick = stepFourLoop;
      return inputNumberOne;
    } else {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Incorrect syntax, please try again.";
    }
  } else {
    let letCheckArray = inputValueAsArray[0];
    variableName = inputValueAsArray[1];
    let letEqualArray = inputValueAsArray[2];
    let letSemiArray = inputValueAsArray[3];

    let letCheck = letCheckArray.includes("let");
    let equalCheck = letEqualArray.includes("=");
    let semiCheck = letSemiArray.includes(";");

    let getNum = letSemiArray.replace(";", "");
    inputNumberOne = Number(getNum);

    function hasNumber(myString) {
      let check = /\d/.test(myString);
      return check;
    }

    let check1 = hasNumber(inputValue);

    if (!check1) {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Missing a number.";
    } else if (letCheck && equalCheck && semiCheck) {
      pBuildingElement.innerHTML = "for(" + inputValue + ")";
      buildingIntructions.innerText =
        "Correct! What is the next thing we add to the parentheses?";
      buttonBuilding.onclick = stepFourLoop;
      return inputNumberOne;
    } else {
      buildingIntructions.innerText =
        buildingIntructions.innerText + "Incorrect syntax, please try again.";
    }
    return variableName;
  }
  return conditionOne;
};

let stepTwoLoop = function () {
  let inputValue = inputBuilding.value;

  if (inputValue === "()") {
    pBuildingElement.innerHTML = "for()";
    buildingIntructions.innerText =
      "Correct! What is the first thing we add into the parentheses using i as the variable name?";
    buttonBuilding.onclick = stepThreeLoop;
  } else {
    buildingIntructions.innerText =
      buildingIntructions.innerText + "Incorrect syntax, please try again.";
  }
};

let startForLoop = function () {
  let inputValue = inputBuilding.value;

  if (inputValue === "for") {
    pBuildingElement.innerHTML = "for";
    buildingIntructions.innerText =
      "Correct! What is the next part of the for loop?";
    buttonBuilding.onclick = stepTwoLoop;
  } else {
    buildingIntructions.innerText =
      buildingIntructions.innerText + "Incorrect syntax, please try again.";
  }
};

buttonBuilding.onclick = startForLoop;



