demosBox = document.getElementById("demos-box");
demosBox.addEventListener("click", (e) => {
  let anchor = document.createElement("a");
  anchor.href = "/main-demos/";
  document.body.appendChild(anchor);
  anchor.click();
});

tutorialsBox = document.getElementById("tutorials-box");
tutorialsBox.addEventListener("click", (e) => {
  let anchor = document.createElement("a");
  anchor.href = "/main-tutorials/";
  document.body.appendChild(anchor);
  anchor.click();
});

mainPic1 = document.getElementById("main-pic-1");
mainPic2 = document.getElementById("main-pic-2");
window.addEventListener("resize", (e) => {
  if (window.innerWidth < 1000) {
    mainPic1.style = "display:none;";
    mainPic2.style = "display:none;";
  }
  if (window.innerWidth >= 1000) {
    mainPic1.style = "";
    mainPic2.style = "";
  }
});

window.addEventListener("DOMContentLoaded", (e) => {
  if (window.innerWidth < 1000) {
    mainPic1.style = "display:none;";
    mainPic2.style = "display:none;";
  }
  if (window.innerWidth >= 1000) {
    mainPic1.style = "";
    mainPic2.style = "";
  }
});