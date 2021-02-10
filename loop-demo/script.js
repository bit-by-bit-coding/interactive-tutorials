// script.js

let bodySegmentCount = 1;
let bodySegmentMaxLimit = 8;
let bodySegmentMinLimit = 1;
const minusButton = document.getElementById('minus-button');
const plusButton = document.getElementById('plus-button');
const caterpillar = document.getElementById('showcase-section');
const greenButton = document.getElementById('green-button');
const orangeButton = document.getElementById('orange-button');


function addBodySegments(){
  const bodySegment = document.createElement('div');
  if(bodySegmentCount < bodySegmentMaxLimit){
    bodySegmentCount++;
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = '';
    caterpillar.appendChild(bodySegment);
    bodySegment.classList.add('body-segment');
  } else if (bodySegmentCount >= bodySegmentMaxLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'Only 8 will fit!';
    return;
  }
};

function subtractBodySegments(){
  if(bodySegmentCount > bodySegmentMinLimit){
    bodySegmentCount--;
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = '';
    let bodySegmentToRemove = document.querySelector(".body-segment:last-of-type")
    caterpillar.removeChild(bodySegmentToRemove);
    
  } else if (bodySegmentCount <= bodySegmentMinLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'You have to have at least 1!'
    return;
  }
};

function onPlusClick() {
    addBodySegments();
  
};

function onMinusClick() {
  subtractBodySegments();
}

function makeGreenSegments() {
const addedDivs = document.querySelectorAll('.body-segment');
for (i = 0; i < addedDivs.length; i++) {
  addedDivs[i].style.background = "green";
}
};

function makeOrangeSegments() {
  const addedDivs = document.querySelectorAll('.body-segment');
  for (i = 0; i < addedDivs.length; i++) {
    addedDivs[i].style.background = "#ff8900";
  }
  };

greenButton.addEventListener('click', makeGreenSegments)
orangeButton.addEventListener('click', makeOrangeSegments)
plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);
