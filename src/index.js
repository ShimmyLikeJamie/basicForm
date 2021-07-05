console.log('test');

(() => {
  let submit = document.getElementById('submit');
  let email = document.getElementById('email');
  let emailError = document.getElementById('emailError');
  let country = document.getElementById('country');
  let zipcode = document.getElementById('zipcode');
  let zipcodeError = document.getElementById('zipcodeError');
  let password = document.getElementById('password');
  let passwordError = document.getElementById('passwordError');
  let confirmPassword = document.getElementById('confirmPassword');
  let confirmPasswordError = document.getElementById('confirmPasswordError');

  zipcode.oninput = () => {
    if (zipcode.value.length != 6) {
      zipcodeError.innerHTML = 'Use 6 digits for zipcodes';
      zipcode.setAttribute('class', 'invalid');
    } else {
      zipcodeError.getElementById('zipcodeError').innerHTML = '';
      zipcode.setAttribute('class', '');
    }
  };

  password.oninput = () => {
    if (password.value.length < 8) {
      passwordError.innerHTML = 'Must be at least 8 characters long';
      password.setAttribute('class', 'invalid');
    } else {
      passwordError.innerHTML = '';
      password.setAttribute('class', '');
    }
  };
  confirmPassword.oninput = () => {
    if (confirmPassword.value != password.value) {
      confirmPasswordError.innerHTML = 'Must match password';
      confirmPassword.setAttribute('class', 'invalid');
    } else {
      confirmPasswordError.innerHTML = '';
      confirmPassword.setAttribute('class', '');
    }
  };

  email.oninput = () => {
    let emailPattern = /^\w+@\w+\.[A-Za-z]+$/;
    if (!emailPattern.test(email.value)) {
      email.setAttribute('class', 'invalid');
    } else {
      email.setAttribute('class', '');
    }
  };
})();
