
function calculate(operation) {
  const value1 = parseFloat(document.querySelector('.calculator__inputs--value1').value);
  const value2 = parseFloat(document.querySelector('.calculator__inputs--value2').value);
  const resultInput = document.querySelector('.calculator__result--value');

  if (isNaN(value1) || isNaN(value2)) {
    alert("Please Enter a Valid Number.");
    resultInput.value = '';
    return;
  }
  
  let result;
  
  switch (operation) {
    case 'add':
      result = value1 + value2;
      break;
    case 'multiply':
      result = value1 * value2;
      break;
    case 'subtract':
      result = value1 - value2;
      break;
    case 'divide':
      if (value2 === 0) {
        resultInput.value = 'Cannot divide by zero';
        return;
      }
      result = value1 / value2;
      break;
    default:
      result = 'Invalid operation';
  }
  
  resultInput.value = result.toFixed(2);
}

document.querySelector('.calculator__operations--add').addEventListener('click', () => calculate('add'));
document.querySelector('.calculator__operations--multiply').addEventListener('click', () => calculate('multiply'));
document.querySelector('.calculator__operations--minus').addEventListener('click', () => calculate('subtract'));
document.querySelector('.calculator__operations--divide').addEventListener('click', () => calculate('divide'));
