// script.js

let bodySegmentCount = 1;
let bodySegmentMaxLimit = 8;
let bodySegmentMinLimit = 1;
const minusButton = document.getElementById('minus-button');
const plusButton = document.getElementById('plus-button');
const caterpillar = document.getElementById('showcase-section');
const blueButton = document.getElementById('blue-button');
const orangeButton = document.getElementById('orange-button');
const pinkButton = document.getElementById('pink-button');
const bounceButton = document.getElementById('bounce-button');
const slowSpeed = document.getElementById('slow-speed');
const showcaseSection = document.getElementById('showcase-section');


function addBodySegments() {
  const bodySegment = document.createElement('div');
  const bodySegmentSpan = document.createElement('span');
  bodySegmentSpan.textContent = `${showcaseSection.children.length}`;
  bodySegmentSpan.setAttribute('class', 'body-segment-number');
  bodySegment.appendChild(bodySegmentSpan);
  if (bodySegmentCount < bodySegmentMaxLimit) {
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

function subtractBodySegments() {
  if (bodySegmentCount > bodySegmentMinLimit) {
    bodySegmentCount--;
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = '';
    let bodySegmentToRemove = document.querySelector(".body-segment:last-of-type");
    caterpillar.removeChild(bodySegmentToRemove);

  } else if (bodySegmentCount <= bodySegmentMinLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'You have to have at least 1!';
    return;
  }
};

function onPlusClick() {
  addBodySegments();
};

function onMinusClick() {
  subtractBodySegments();
};



let bouncing = false;
function bounceSegments() {
  let addedDivs = document.getElementsByClassName('body-segment');
  if (!bouncing) {
    bounceButton.innerText = 'reset bounce';
    document.getElementById('change-description').innerHTML = 'Adds a CSS class to each body segment which activates the bounce animation';
    document.getElementById('code-description').innerHTML = 'bodySegments[i].classList.add(\'bounce\');';
    bouncing = true;
    for (let i = 0; i < addedDivs.length; i++) {
      if (slowSpeed.checked) {
        setTimeout(function () {
          addedDivs[i].classList.add('bounce');
        }, 300 * i);
      } else {
        addedDivs[i].classList.add('bounce');
      }
    }
  } else {
    bounceButton.innerText = 'make them bounce!';
    bouncing = false;
    document.getElementById('change-description').innerHTML = '';
    document.getElementById('code-description').innerHTML = '';
    for (let i = 0; i < addedDivs.length; i++) {
      addedDivs[i].classList.remove('bounce');
    }
  }
};

function makeColorSegments(color) {
  let addedDivs = document.querySelectorAll('.body-segment');
  if (bouncing) {
    bounceButton.innerText = 'make them bounce!';
    bouncing = false;
    for (let i = 0; i < addedDivs.length; i++) {
      addedDivs[i].classList.remove('bounce');
    }
  }
  for (let i = 0; i < addedDivs.length; i++) {
    if (slowSpeed.checked) {
      setTimeout(function () {
        addedDivs[i].style.backgroundColor = color;
      }, 300 * i);
    } else {
      addedDivs[i].style.backgroundColor = color;
    }
  }
};

function onBlueButtonClick() {
  makeColorSegments('#05D1E2')
  document.getElementById('change-description').innerHTML = 'Makes each body segment aqua';
  document.getElementById('code-description').innerHTML = 'bodySegments[i].style.backgroundColor = #05D1E2;';
}

function onOrangeButtonClick() {
  makeColorSegments('#FF8900')
  document.getElementById('change-description').innerHTML = 'Makes each body segment orange';
  document.getElementById('code-description').innerHTML = 'bodySegments[i].style.backgroundColor = #FF8900;';
}

function onPinkButtonClick() {
  makeColorSegments('#FD47B3')
  document.getElementById('change-description').innerHTML = 'Makes each body segment pink';
  document.getElementById('code-description').innerHTML = 'bodySegments[i].style.backgroundColor = #FD47B3;';
}


blueButton.addEventListener('click', onBlueButtonClick);
orangeButton.addEventListener('click', onOrangeButtonClick);
pinkButton.addEventListener('click', onPinkButtonClick);
bounceButton.addEventListener('click', () => bounceSegments());
plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);
