import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function saveFormState(e) {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const throttleInput = throttle(saveFormState, 500);

emailInput.addEventListener('input', throttleInput);
messageInput.addEventListener('input', throttleInput);
form.addEventListener('submit', formSubmit);

saveInputToStorage();

function saveInputToStorage() {
  const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedValue) {
    emailInput.value = savedValue.email;
    messageInput.value = savedValue.message;
  }
};

function formSubmit(evt) {
  evt.preventDefault();
  const mail = emailInput.value;
  const message = messageInput.value;

  if (mail !== '' && message !== '') {
    const formData = {
      email: mail,
      message: message,
    };
    console.log(formData);

    form.reset();
  } else {
    alert("Поля 'Email' або 'Message' не можуть бути пустими.");
  }
  localStorage.removeItem(STORAGE_KEY);
};
