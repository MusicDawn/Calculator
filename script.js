function calculate() {
  // Get the values from the input fields
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  
  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }

//   Create an if statement, where if the value of option is + you run the below code

// Perform the addition
const result = num1 + num2;

//   else if the value of option is - you run the following code const result = num1 - num2;

  // Display the result
  document.getElementById("result").value = result;
}
