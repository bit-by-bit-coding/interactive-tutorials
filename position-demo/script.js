function clearChildPosition() {
  document.getElementById("child").classList.remove("pos-absolute-child");
  document.getElementById("child").classList.remove("pos-static-child");
  document.getElementById("child").classList.remove("pos-relative-child");
  document.getElementById("child").classList.remove("pos-fixed-child");
}

function changePositionAbsolute() {
  clearChildPosition();
  document.getElementById("child").classList.add("pos-absolute-child");
  //alert("Hello! I am an alert box!!");
}

function changePositionStatic() {
  clearChildPosition();
  document.getElementById("child").classList.add("pos-static-child");
  //alert("Hello! I am an alert box!!");
}

function changePositionFixed() {
  clearChildPosition();
  document.getElementById("child").classList.add("pos-fixed-child");
  //alert("Hello! I am an alert box!!");
}

function changePositionRelative() {
  clearChildPosition();
  document.getElementById("child").classList.add("pos-relative-child");
  //alert("Hello! I am an alert box!!");
}