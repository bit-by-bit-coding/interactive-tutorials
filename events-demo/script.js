var bulb = document.getElementById("bulbImage");
var powerButton = document.getElementById("powerButton");
var powerText = document.getElementById("powerText");

document.body.addEventListener('change', function (e) {
  let target = e.target;
  
  var mouseEventsState = document.getElementById("mouseEvents").checked;
  var keyboardEventsState = document.getElementById("keyboardEvents").checked;
  var mouseEventsListState = document.getElementById("mouseEventsList");
  var keyboardEventsListState = document.getElementById("keyboardEventsList");
  var listDivState = document.getElementById("listDiv");

  if(mouseEventsState) {
    disableKeyboardEvents();
    listDivState.style.display = "block";
    mouseEventsListState.style.display = "block";
    keyboardEventsListState.style.display = "none";
    powerText.style.display = "none";
    powerButton.style.display = "block";
    powerButton.style.margin = "auto";
  } else if(keyboardEventsState) {
    disableMouseEvents();
    listDivState.style.display = "block";
    mouseEventsListState.style.display = "none";
    keyboardEventsListState.style.display = "block";
    powerText.style.display = "block";
    powerButton.style.display = "none";
    powerText.style.margin = "auto";
  } else {
    listDivState.style.display = "none";
    mouseEventsListState.style.display = "none";
    keyboardEventsListState.style.display = "none";
  }
  
  var clickState = document.getElementById("onclick").checked;
  var mouseoverState = document.getElementById("onmouseover").checked;
  var mouseoutState = document.getElementById("onmouseout").checked;
  var keydownState = document.getElementById("onkeydown").checked;
  var keyupState = document.getElementById("onkeyup").checked;

  var description = "";
  if (clickState || mouseoverState || mouseoutState || keydownState || keyupState) {
    description += "Now you can turn on/off the bulb by <ul>";
    if (clickState) {
      description += "<li>clicking on the power button.</li>"
    }
    if (mouseoverState) {
      description += "<li>moving the mouse over the power button.</li>"
    }
    if (mouseoutState) {
      description += "<li>moving the mouse away from the power button.</li>"
    }
    if (keydownState) {
      description += "<li>pressing a key in the input box.</li>"
    }
    if (keyupState) {
      description += "<li>releasing a key in the input box.</li>"
    }
    description += "</ul>";
  } else {
    description += "Now you can not turn on/off the bulb. Please select at least one event.";
  }
  document.getElementById("eventDescription").innerHTML = description.valueOf();

  switch (target.id) {
    case 'onclick':
      if (clickState == true) {
        powerButton.addEventListener("click", bulbPower);
      } else {
        powerButton.removeEventListener("click", bulbPower);
      }
      break;
    case 'onmouseover':
      if (mouseoverState == true) {
        powerButton.addEventListener("mouseover", bulbPower);
      } else {
        powerButton.removeEventListener("mouseover", bulbPower);
      }
      break;
    case 'onmouseout':
      if (mouseoutState == true) {
        powerButton.addEventListener("mouseout", bulbPower);
      } else {
        powerButton.removeEventListener("mouseout", bulbPower);
      }
      break;
    case 'onkeydown':
      if (keydownState == true) {
        powerText.addEventListener("keydown", bulbPower);
      } else {
        powerText.removeEventListener("keydown", bulbPower);
      }
      break;
    case 'onkeyup':
      if (keyupState == true) {
        powerText.addEventListener("keyup", bulbPower);
      } else {
        powerText.removeEventListener("keyup", bulbPower);
      }
      break;
  }
});

function bulbPower() {
  if (bulb.src.match("bulbon")) {
    bulb.src = "bulboff.png";
  } else {
    bulb.src = "bulbon.png";
  }
}

function disableMouseEvents() {
  powerButton.removeEventListener("click", bulbPower);
  powerButton.removeEventListener("mouseover", bulbPower);
  powerButton.removeEventListener("mouseout", bulbPower);
  document.getElementById("onclick").checked = false;
  document.getElementById("onmouseover").checked = false;
  document.getElementById("onmouseout").checked = false;
}

function disableKeyboardEvents() {
  powerText.removeEventListener("keydown", bulbPower);
  powerText.removeEventListener("keyup", bulbPower);
  document.getElementById("onkeydown").checked = false;
  document.getElementById("onkeyup").checked = false;
}