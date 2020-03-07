const signupInputs = document.querySelectorAll('.signup__input');

function clearPrevState(input) {
  if (input.classList.contains('signup__input--invalid')) {
    const field = input.closest('.signup__field');
    const errorMsg = field.querySelector('.signup__error');
    errorMsg.classList.remove('signup__error--active');
    input.classList.remove('signup__input--invalid');
  } else if (input.classList.contains('signup__input--valid')) {
    input.classList.remove('signup__input--valid');
  }
}

function displayError(input, message) {
  const field = input.closest('.signup__field');
  const errorMsg = field.querySelector('.signup__error');
  errorMsg.innerText = `${message}`;
  errorMsg.classList.add('signup__error--active');
  input.classList.add('signup__input--invalid');
}

function displaySuccess(input) {
  input.classList.add('signup__input--valid');
}

function validateInput() {
  clearPrevState(this);

  const {
    valid,
    valueMissing,
    typeMismatch,
    tooShort,
    patternMismatch,
  } = this.validity;

  if (valid) {
    displaySuccess(this);
  } else {
    if (valueMissing) {
      displayError(this, 'This field is required');
    }
    if (typeMismatch) {
      displayError(this, 'Please enter a valid e-mail');
    }
    if (tooShort) {
      displayError(
        this,
        `${this.name} should be at least ${this.minLength} chars long`
      );
    }
    if (patternMismatch) {
      displayError(this, `${this.name} should contain at least ${this.title}`);
    }
  }
}

signupInputs.forEach(input => {
  input.addEventListener('invalid', validateInput);
  input.addEventListener('blur', validateInput);
});
