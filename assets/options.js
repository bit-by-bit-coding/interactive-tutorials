// options.js
// use to create drop-down filterable inputs

let createOption = (element, options, handler) => {
  handler = handler || () => {};
  let styleSheet = document.getElementById("option-stylesheet")
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    document.querySelector("head").appendChild(styleSheet);
    styleSheet.id = "option-stylesheet";
    styleSheet.innerHTML = "div.option-list-wrapper{border:1px solid #000;box-shadow:0 3px 1px #aaa;position:absolute;background:#38bfe7;overflow-y:scroll;display:block}ul.option-list{overflow:hidden;list-style-type:none;padding:0;margin:0;max-height:10em}li.option-item:hover{cursor:pointer;background-color:#1aadd9}input.option{border:1px solid #000;border-radius:.25em;outline:0;font-size:1em;padding:.125em .25em;width:100%}input.option:focus{box-shadow:0 0 0 1px #ff8900 inset;border:1px solid #ff8900;border-radius:.25em .25em 0 0}";
  }
  let wrapper = document.createElement("div");
  element.parentNode.appendChild(wrapper);
  wrapper.appendChild(element);
  element.style.fontSize = "1em";
  // create the list wrapper.
  let listWrapper = document.createElement("div");
  listWrapper.classList.add("option-list-wrapper");
  listWrapper.style.visibility = 'hidden';
  let width = element.clientWidth;
  listWrapper.style.minWidth = width + 'px';
  let list = document.createElement("ul");
  list.classList.add("option-list");
  for (let option in options) {
    let item = document.createElement("li");
    item.innerHTML = option.toString();
    item.classList.add("option-" + options[option].toString());
    item.classList.add("option-item");
    item.addEventListener("click", (e) => {
      element.value = e.target.innerHTML;
      element.dispatchEvent(new Event('change'));
    });
    list.appendChild(item);
  }
  listWrapper.appendChild(list);
  wrapper.appendChild(listWrapper);
  element.addEventListener("focus", (e) => {
    e.target.previousValue = e.target.value;
    e.target.value = "";
    // e.target.setSelectionRange(0, e.target.value.length);
    filterOptions(e.target.value);
    list.style.height = "auto";
    slideDown(list, 300);
  });
  element.addEventListener("focusout", (e) => {
    if (e.target.value === "") {
      e.target.value = e.target.previousValue;
    }
    // we must add a timeout otherwise some browsers are too fast
    // they will close the list before trigerring the click event
    window.setTimeout( () => {
      slideUp(list, 200);
    }, 100);
  });
  // event listener for the sorting
  element.addEventListener("keyup", (e) => {
    var possibleValue;
    if (!e.key.match(/[a-zA-Z0-9 ]/i)) {
      possibleValue = element.value + e.key;
    } else {
      possibleValue = element.value;
    }
    filterOptions(possibleValue, e.keyCode === 8);
    list.style.height = "auto";
    if (event.key == "Enter" && possibleValue != "") {
      e.preventDefault();
      let value = null;
      list.children.forEach(child => {
        value = value === null && child.style.display != "none" ? child.innerText : value;
      });
      if (value !== null) {
        element.blur();
        element.value = value;
        element.dispatchEvent(new Event('change'));
      }
    }
  });
  element.addEventListener('change', (e) => {
    handler(Object.assign(e, {
      options: options
    }));
  });
  function filterOptions(possibleValue, hardReset) {
    hardReset = hardReset || false;
    let filteredValues = Object.keys(options).filter(function(el) {
      return !(el.toLowerCase().indexOf(possibleValue.toLowerCase()) > -1);
    });
    if (hardReset) {
      list.children.forEach(child => {
        child.style.display = "block";
      });
    }
    for (var i=0; i < filteredValues.length; i++) {
      list.querySelector(".option-" + options[filteredValues[i]]).style.display = "none";
    }
  }
  function slideUp(target, duration) {
    target.parentNode.style.zIndex = 0;
    let height = target.clientHeight;
    let animationInterval = window.setInterval(frame, 10);
    let frameCount = duration/10;
    function frame() {
      if (frameCount === 0) {
        window.clearInterval(animationInterval);
        target.classList.remove('opened');
        target.parentNode.style.visibility = 'hidden';
      } else {
        frameCount --;
        target.style.height = frameCount*(height/(duration/10)) + 'px';
      }
    }
  }
  function slideDown(target, duration) {
    target.parentNode.style.zIndex = 1;
    target.classList.add("opened");
    target.parentNode.style.visibility = 'visible';
    target.style.height = 'auto';
    let height = target.clientHeight;
    target.style.height = '0px';
    let animationInterval = window.setInterval(frame, 10);
    let frameCount = 0;
    function frame() {
      if (frameCount === duration/10) {
        window.clearInterval(animationInterval);
      } else {
        frameCount ++;
        // console.log(frameCount*(height/(duration/10)));
        target.style.height = frameCount*(height/(duration/10)) + 'px';
      }
    }
  }
}
