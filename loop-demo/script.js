// script.js

let congaCount = 1;
const minusButton = document.getElementById('minus-button')
const plusButton = document.getElementById('plus-button')

plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);

function onPlusClick() {
    congaCount += 1;
    document.getElementById('conga-line-count').innerHTML = congaCount;
    console.log(congaCount)
};

function onMinusClick() {
  congaCount -= 1;
  document.getElementById('conga-line-count').innerHTML = congaCount;
  console.log(congaCount)
}



// let executeCode = function (e) {
//   updateConga(congaCount);
// };
// let autoSaveTime = 3000;
// let autoSaveTimeout = setTimeout(executeCode, autoSaveTime);

let editorElement = document.getElementById("editor");
// Add the "Cmd+S" or "Ctrl+S" to execute the code
editorElement.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
    e.preventDefault();
    executeCode();
  }
});

// Create the Code Jar
let jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  '
});
jar.updateCode("let bitByBotCount = " + JSON.stringify(congaCount, null, '  '));
jar.onUpdate(code => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(executeCode, autoSaveTime);
});

/* Readability functions */




/* update functions */

let updateCongaLine = () => {
};



/* Add event listeners to buttons */


/* Create the options and update the car SVG */


