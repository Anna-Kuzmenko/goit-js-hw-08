const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;

const savedFormData = 'feedback-form-state';

const userData = {};

if (localStorage[savedFormData]) {

    const LocalData = JSON.parse(localStorage[savedFormData]);

    email.value = LocalData.email;
    message.value = LocalData.message;
}

feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
    const formData = new FormData(feedbackForm);

    formData.forEach((value, name) => {

        userData[name] = value;
        localStorage.setItem(savedFormData, JSON.stringify(userData));

    });
}

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const LocalData = JSON.parse(localStorage[savedFormData]);
    console.log(LocalData);

    localStorage.clear();

     feedbackForm.reset();
}





