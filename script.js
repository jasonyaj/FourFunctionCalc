var displayDiv = document.querySelector("#display");
var num1 = "";
var num2 = "";
var op = "";

function press(element) {
  num1 += element;
  displayDiv.innerText = num1;
  console.log("Clicked: ", element);
  console.log(num1);
}

function clr() {
  displayDiv.innerText = "0";
  num1 = "";
  num2 = "";
  op = "";
}

function setOP(element) {
  displayDiv.innerText = element;
  op = element
  num2 = num1;
  num1 = "";
}

function calculate() {
  var a = parseFloat(num2);
  var b = parseFloat(num1);
  var answer = 0;
  switch (op) {
    case "/":
      answer = a / b;
      break;
    case "*":
      answer = a * b;
      break;
    case "-":
      answer = a - b;
      break;
    case "+":
      answer = a + b;
      console.log(answer);
      break;
  }
  displayDiv.innerText = answer;
}
