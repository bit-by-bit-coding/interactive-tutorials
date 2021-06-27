window.onload = async function() {
  await sleep(400);
  checkBool();
}

let firstValue = document.getElementById("firstValue");
let operation = document.getElementById("operation");
let secondValue = document.getElementById("secondValue");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let secondOpCheck = document.getElementById("secondOperator");
let transition = document.getElementById("transition");
let thirdValue = document.getElementById("thirdValue");
let secondOperation = document.getElementById("secondOperation");
let fourthValue = document.getElementById("fourthValue");
let scrollWrapper  = document.getElementById("scrollWrapper");
let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");
let bitbybot = document.getElementById("bitbybot");

var return1 = false;
var return2 = false;
var cardNumber = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

firstValue.addEventListener("change", checkBool);
operation.addEventListener("change", checkBool);
secondValue.addEventListener("change", checkBool);
transition.addEventListener("change", checkBool);
thirdValue.addEventListener("change", checkBool);
secondOperation.addEventListener("change", checkBool);
fourthValue.addEventListener("change", checkBool);
scrollWrapper.addEventListener("click", quizGame);

function checkBool() {
  switch(operation.value){
    case "===":
      return1 = (firstValue.value === secondValue.value);
      break;
    case "!==":
      return1 = (firstValue.value !== secondValue.value);
      break;
    case ">":
      return1 = (firstValue.value > secondValue.value);
      break;
    case "<":
      return1 = (firstValue.value < secondValue.value);
      break;
    case ">=":
      return1 = (firstValue.value >= secondValue.value);
      break;
     case "<=":
      return1 = (firstValue.value <= secondValue.value);
      break;
  }
  if(secondOpCheck.checked){
    switch(secondOperation.value){
      case "===":
        return2 = (thirdValue.value === fourthValue.value);
        break;
      case "!==":
        return2 = (thirdValue.value !== fourthValue.value);
        break;
      case ">":
        return2 = (thirdValue.vale > fourthValue.value);
        break;
      case "<":
        return2 = (thirdValue.value < fourthValue.value);
        break;
      case ">=":
        return2 = (thirdValue.value >= fourthValue.value);
        break;
      case "<=":
        return2 = (thirdValue.value <= fourthValue.value);
        break;
    }
    switch(transition.value){
      case "and":
        result.textContent = return1 && return2;
        break;
      case "or":
        result.textContent = return1 || return2;
        break;
    }
  } else {
    result.textContent = return1;
  }
  if(result.textContent === "true"){
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }
}

function secondOp(){
  if(!secondOpCheck.checked){
    transition.style.display = "none";
    thirdValue.style.display = "none";
    secondOperation.style.display = "none";
    fourthValue.style.display = "none";
  }
  if(secondOpCheck.checked){
    transition.style.display = "initial";
    thirdValue.style.display = "initial";
    secondOperation.style.display = "initial";
    fourthValue.style.display = "initial";
  }
}

function quizGame(){
  switch(cardNumber){
    case 1:
      let pet = document.getElementById("pet");
      let owner = document.getElementById("owner");
      let thisDiv = document.getElementById("card1");
      if(owner.value === "dog"){
          thisDiv.style.backgroundColor = "blue";
      }
      if(pet.value === "fish"){
          thisDiv.style.backgroundColor = "red";
      }
      if(owner.value === "you"){
          thisDiv.style.backgroundColor = "green";
          check1.style.backgroundColor = "green";
          autoScroll();
          cardNumber+=1;
          break;
      }
      break;
    case 2:
      let balloon = document.getElementById("balloon");
      let balloonCount = document.getElementById("balloonCount");
      let thisDiv2 = document.getElementById("card2");
      if((balloon.value != "green") && (balloonCount.value === 5)){
          thisDiv2.style.borderColor = "yellow";
          check2.style.backgroundColor = "green";
          autoScroll();
          cardNumber+=1;
          break;
      }
      if(balloon.value != "red"){
          thisDiv2.style.borderColor = "green";
      }
      if(balloonCount.value > 3){
          thisDiv2.style.borderColor = "blue";
      }
      break;
    case 3:
      let car = document.getElementById("car");
      let numberOfSeats = document.getElementById("numberOfSeats");
      let thisDiv3 = document.getElementById("card3");
      if(numberOfSeats.value === car.value){
          thisDiv3.style.fontSize = "0.8em";
      }
      if(numberOfSeats.value > 5 || car.value === "Volvo"){
          thisDiv3.style.fontSize = "1.2em";
      }
      if( numberOfSeats.value >= 3 && numberOfSeats.value < 5 && car.value === "Ford"){
          thisDiv3.style.fontSize = "1em";
          check3.style.backgroundColor = "green";
          autoScroll();
          cardNumber+=1;
      }
      break;
    case 4:
      let project = document.getElementById("project");
      let tool = document.getElementById("tool");
      let music = document.getElementById("music");
      let thisDiv4 = document.getElementById("card4");

      if((tool.value != "Hammer" && project.value === "Game") || (music.value === "Jazz" || project.value === tool.value)){
          thisDiv4.style.color = "red";
      }
      if(tool.valuee = "Computer" && project.value === "Robot" && music.value === "Pop"){
          thisDiv4.style.color = "green";
      }
      if(tool.value === "Computer" && music.value != "Rock" && !(project.value === "Car")){
          thisDiv4.style.color = "blue";
          check4.style.backgroundColor = "green";
          autoScroll();
          cardNumber+=1;
              break
      }
      break;
    case 5:
      let drink = document.getElementById("drink");
      let sugar = document.getElementById("sugar");
      let calories = document.getElementById("calories");
      let thisDiv5 = document.getElementById("card5");
      if((calories.value < sugar.value && drink.value != "Energy Drink") && (sugar.value > 30 || calories.value >= 20) || drink.value === "Milk"){
          thisDiv5.style.width = 700;
      }
      if(calories.value >= sugar.value && calories.value < 20 && calories.value > 0 && !(drink.value != "Protien Shake" && calories.value === 20)){
          thisDiv5.style.width = 3000;
          check5.style.backgroundColor = "green";
          bitbybot.style.visibility = "visible";
          bitbybot.classList.add("active")
          break;
      }
      if(drink.value === "Soda" || calories.value === sugar.value && drink.value != "Soda"){
          thisDiv5.style.width = 2000;
      }
      break;
  }
}

async function autoScroll(){
  for(var i = 0; i < 60; i++){
    scrollWrapper.scrollBy(5, 0);
    await sleep(10);
  }
}

function reset(){
  cardNumber = 1;
  scrollWrapper.scrollBy(-3000, 0);
  check1.style.backgroundColor = "white";
  check2.style.backgroundColor = "white";
  check3.style.backgroundColor = "white";
  check4.style.backgroundColor = "white";
  check5.style.backgroundColor = "white";

  document.getElementById("card1").style.backgroundColor = "";
  document.getElementById("card2").style.borderColor = "";
  document.getElementById("card3").style.fontSize = "";
  document.getElementById("card4").style.color = "";
  document.getElementById("card5").style.width = "";

  var elements = document.getElementsByTagName('select');
  for (var i = 0; i < elements.length; i++) {
    elements[i].selectedIndex = 0;
  }

  bitbybot.style.visibility = "hidden";
  bitbybot.classList.remove("active");
}
