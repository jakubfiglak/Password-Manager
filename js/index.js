const lengthEl = document.querySelector('#length');
const options = document.querySelectorAll('.generator__checkbox');
const generateBtn = document.querySelector('#generate');
const passwordEl = document.querySelector('#password');
const labelEl = document.querySelector('#label');
const passwordForm = document.querySelector('#form');

function generateRandomSymbol(type) {
  switch (type) {
    case 'lowercase':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    case 'uppercase':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    case 'number':
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

    case 'symbol': {
      const symbols = `~!@#$%^&*()_+={}[]|:;"'<,>.?/`;
      return symbols[Math.floor(Math.random() * symbols.length)];
    }

    default:
      return '';
  }
}

function getRandomType(types) {
  return types[Math.floor(Math.random() * types.length)];
}

function generatePassword() {
  const length = lengthEl.value;
  const types = [];
  let password = '';

  options.forEach(option => (option.checked ? types.push(option.name) : null));

  if (!types.length) {
    return;
  }

  for (let i = 0; i < length; i++) {
    password += generateRandomSymbol(getRandomType(types));
  }

  passwordEl.value = password;
}

generateBtn.addEventListener('click', generatePassword);
