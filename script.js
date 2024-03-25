const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const textOutput = document.getElementById('result');

function cleanInputString(str) {
  const regex = /[^\w]|_/g
  return str.replace(regex, '').toLowerCase();
}

function checkPalindrome() {
  const check = cleanInputString(textInput.value)
  const kcehc = cleanInputString(textInput.value).split('').reverse().join('')

  if (textInput.value === '') {
    alert('Please input a value');
  } else if ( check === kcehc) {
    textOutput.innerHTML = `${textInput.value} is a palindrome`;
    textInput.value ='';
  } else {
    textOutput.innerHTML = `${textInput.value} is not a palindrome`;
    textInput.value ='';
  }
}
checkButton.addEventListener('click', checkPalindrome);