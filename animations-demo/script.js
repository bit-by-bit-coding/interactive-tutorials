var id = null;
function e1Example() {
  var elem = document.getElementById("e1Bot");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

function e2Example() {
    var elem = document.getElementById("e2Bot");
    var delay = document.getElementById("e2DelayValue");
    setTimeout(e2, delay.value*1000);
}

function e2() {
    var elem = document.getElementById("e2Bot");
    var opacity = 0;
    clearInterval(id);
    id = setInterval(frames, 100);
    function frames() {
        if (opacity == 1) {
            clearInterval(id);
        }
        else {
            opacity+=0.1;
            elem.style.opacity = opacity;
        }
    }
    setTimeout(e2Finish, 1000)
}

function e2Finish() {
    var elem = document.getElementById("e2Bot");
    elem.style.opacity = 0;
}