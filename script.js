//Select arithmetic operation
let AritOperator = prompt("Please enter the arithmetic operator");

let userValue1 = parseInt(prompt("Input an integer number"));
//Getting the firstvalue from the user

let userValue2 = parseInt(prompt("Input another integer number"));
//Getting the secondvalue from the user

if (AritOperator == "+") {
  let answer = userValue1 + userValue2;
  console.log(
    "Adittion of " + userValue1 + " + " + userValue2 + " = " + answer
  );
}
//Test if AritOperator is equal to "+", then sum up the firstvalue and the secondvalue user input

if (AritOperator == "-") {
  let answer = userValue1 - userValue2;
  console.log(
    "Substraction of " + userValue1 + " - " + userValue2 + " = " + answer
  );
}
//Test if AritOperator is equal to "-", then substract the secondvalue from the firstnumber

if (AritOperator == "*") {
  let answer = userValue1 * userValue2;
  console.log(
    "Multiplication of " + userValue1 + " * " + userValue2 + " = " + answer
  );
}
//Test if AritOperator is equal to "*", then multiply the firstvalue by the secondvalue

if (AritOperator == "/") {
  let answer = userValue1 / userValue2;
  console.log(
    "Division of " + userValue1 + " / " + userValue2 + " = " + answer
  );
}
//Test if AritOperator is equal to "/", then the divide the two numbers
