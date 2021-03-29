function clearChildPosition() {
    document.getElementById("parent-static").classList.add("hide");
    document.getElementById("parent-relative").classList.add("hide");
    document.getElementById("parent-absolute").classList.add("hide");
    document.getElementById("parent-fixed").classList.add("hide");

    document.getElementById("display-relative").classList.add("hide");
    document.getElementById("display-static").classList.add("hide");
    document.getElementById("display-absolute").classList.add("hide");
    document.getElementById("display-fixed").classList.add("hide");
  }
  
  function changePosition(selectTag) {
    var whichSelected = document.getElementById(parent).style.position = "static"
  }

  function showLeftTop() {
    var element = document.getElementById("child")
    var rect = element.getBoundingClientRect();
    document.getElementById("pos-top").innerHTML = "top: " + Math.round(rect.top);
    document.getElementById("pos-left").innerHTML = "left: " + Math.round(rect.left);
  }

  function changePositionAbsolute() {
    clearChildPosition();
    document.getElementById("parent-absolute").classList.remove("hide");
    document.getElementById("display-absolute").classList.remove("hide");
  }
  
  function changePositionStatic() {
    clearChildPosition();
    document.getElementById("parent-static").classList.remove("hide");
    document.getElementById("display-static").classList.remove("hide");
    //alert("Hello! I am an alert box!!");
  }
  
  function changePositionFixed() {
    clearChildPosition();
    document.getElementById("parent-fixed").classList.remove("hide");
    document.getElementById("display-fixed").classList.remove("hide");
    //alert("Hello! I am an alert box!!");
  }
  
  function changePositionRelative() {
    clearChildPosition();
    document.getElementById("parent-relative").classList.remove("hide");
    document.getElementById("display-relative").classList.remove("hide");
    //alert("Hello! I am an alert box!!");
  }