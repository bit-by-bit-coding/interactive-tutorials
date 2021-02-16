var bulb = document.getElementById("bulbImage");

document.body.addEventListener('change', function (e) {
  let target = e.target;
  var clickState = document.getElementById("onclick").checked;
  var mouseoverState = document.getElementById("onmouseover").checked;
  var mouseoutState = document.getElementById("onmouseout").checked;

  var description = "<br>";
  if (clickState || mouseoverState || mouseoutState) {
    description += "Now you can turn on/off the bulb by <ul>";
    if (clickState) {
      description += "<li>clicking on the bulb.</li>"
    }
    if (mouseoverState) {
      description += "<li>moving the mouse over the bulb.</li>"
    }
    if (mouseoutState) {
      description += "<li>moving the mouse away from the bulb.</li>"
    }
    description += "</ul>";
  } else {
    description += "Now you can not turn on/off the bulb. Please select at least one event.";
  }
  document.getElementById("eventDescription").innerHTML = description.valueOf();

  switch (target.id) {
    case 'onclick':
      if (clickState == true) {
        bulb.addEventListener("click", bulbPower);
      } else {
        bulb.removeEventListener("click", bulbPower);
      }
      break;
    case 'onmouseover':
      if (mouseoverState == true) {
        bulb.addEventListener("mouseover", bulbPower);
      } else {
        bulb.removeEventListener("mouseover", bulbPower);
      }
      break;
    case 'onmouseout':
      if (mouseoutState == true) {
        bulb.addEventListener("mouseout", bulbPower);
      } else {
        bulb.removeEventListener("mouseout", bulbPower);
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