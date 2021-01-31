// script.js

let bodySegmentCount = 1;
let bodySegmentMaxLimit = 8;
let bodySegmentMinLimit = 1;
const minusButton = document.getElementById('minus-button')
const plusButton = document.getElementById('plus-button')
const caterpillar = document.getElementById('showcase-section')
const bodySegment = document.createElement('div');

function addBodySegments(){
  if(bodySegmentCount < bodySegmentMaxLimit){
    bodySegmentCount++;
    const bodySegment = document.createElement('div');
    caterpillar.appendChild(bodySegment);
    bodySegment.classList.add('body-segment');
    bodySegment.id = 'bodysegment-' + bodySegmentCount;
  } else if (bodySegmentCount >= bodySegmentMaxLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'Only 8 will fit!'
    return;
  }
};

function subtractBodySegments(){
  if(bodySegmentCount > bodySegmentMinLimit){
    bodySegmentCount--;
    document.getElementById('min-max-message').innerHTML = ''
    let bodySegmentToRemove = document.getElementById(`bodysegment-${bodySegmentCount}`);
    bodySegmentToRemove.remove();

  } else if (bodySegmentCount <= bodySegmentMaxLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'You have to have at least 1!'
    return;
  }
};

function onPlusClick() {
    document.getElementById('min-max-message').innerHTML = ''
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    addBodySegments();
  //TODO: look at amount of children in caterpillar and limit to only 8 divs
  
};

//TODO: correctly remove a div on minus click. look at remove and removeChild. Also declare bodysegment here first
function onMinusClick() {
  document.getElementById('min-max-message').innerHTML = ''
  document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
  subtractBodySegments();

}



let executeCode = function (e) {
  updateCaterpillar(bodySegmentCount);
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




