// script.js

let bodySegmentCount = 1;
const minusButton = document.getElementById('minus-button')
const plusButton = document.getElementById('plus-button')
const caterpillar = document.getElementById('showcase-section')



function onPlusClick() {
  bodySegmentCount += 1;
    document.getElementById('min-max-message').innerHTML = ''
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    const bodySegment = document.createElement('div');
    caterpillar.appendChild(bodySegment);
    bodySegment.classList.add('body-segment');
  //TODO: look at amount of children in caterpillar and limit to only 8 divs
      if (bodySegmentCount > 8 ) {
        bodySegmentCount= 8
        document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
        document.getElementById('min-max-message').innerHTML = 'Only 8 body segments will fit!'
      } else {
        document.getElementById('conga-line-count').innerHTML = bodySegmentCount;
      }
};

function onMinusClick() {
  bodySegmentCount -= 1;
  document.getElementById('min-max-message').innerHTML = ''
  if (bodySegmentCount < 1 ) {
    bodySegmentCount = 1
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'You have to have at least 1 body segment!'
  } else {
    document.getElementById('conga-line-count').innerHTML = bodySegmentCount;
  }
  
  console.log(bodySegmentCount)
}



let executeCode = function (e) {
  updateCongaLine(bodySegmentCount);
};
let autoSaveTime = 3000;
let autoSaveTimeout = setTimeout(executeCode, autoSaveTime);

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
jar.updateCode("let bodySegmentCount = " + bodySegmentCount);
jar.onUpdate(code => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(executeCode, autoSaveTime);
});

/* Readability functions */




/* update functions */

let updateCaterpillar = (bodySegmentCount) => {

};



/* Add event listeners to buttons */

document.getElementById("execute-button").addEventListener('click', (e) => {
  executeCode()
});
document.getElementById("reset-button").addEventListener('click', (e) => {
  bodySegmentCount = 1
   jar.updateCode("let bodySegmentCount = " + bodySegmentCount);

});

plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);



