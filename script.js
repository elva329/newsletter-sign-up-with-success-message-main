const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error');
const messageElement = document.createElement('div');
const left = document.getElementById('left');
const right = document.getElementById('right');
const subscribeSuccess = document.getElementById('subscribe-success');
const container = document.getElementById('container');
const hidden = document.getElementById('hidden');
const subscribeButton = document.getElementById('subscribe');

emailInput.addEventListener('input', validateEmail);

function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailInput.value) {
    console.log('11');
    errorMessage.removeChild(messageElement);
    messageElement.innerText = '';
    emailInput.style.border = '1px solid #d7d7d7';
    emailInput.style.backgroundColor = 'white';
  }
  if (!emailInput.value.match(validRegex) && emailInput.value) {
    emailInput.focus();
    messageElement.innerText = 'Valid email required';
    errorMessage.appendChild(messageElement);
    emailInput.style.border = '1px solid red';
    emailInput.style.backgroundColor = '#ffe8e6';
  } else {
    messageElement.innerText = '';
    emailInput.style.border = '1px solid #d7d7d7';
    emailInput.style.backgroundColor = 'white';
  }
}

function subscribe() {
  left.classList.add('hidden');
  right.classList.add('hidden');
  hidden.classList.remove('hidden');
  hidden.classList.add('subscribe-success');
  container.classList.add('container-subscribe');
}
