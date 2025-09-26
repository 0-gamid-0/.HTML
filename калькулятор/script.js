const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const numberOne = Number(inputOne.value);
  const numberTwo = Number(inputTwo.value);
  let result = '';

  if (isNaN(numberOne) && isNaN(numberTwo)) {
    result = 'Неверные значения в обоих полях';
  } else if (isNaN(numberOne)) {
    result = 'Неверное значение в первом поле';
  } else if (isNaN(numberTwo)) {
    result = 'Неверное значение во втором поле';
  } else {
    result = `Результат: ${numberOne + numberTwo}`;
  }

  output.innerText = result;
});