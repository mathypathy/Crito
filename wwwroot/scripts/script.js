 document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const nameValidation = document.getElementById('nameValidation');
    const emailValidation = document.getElementById('emailValidation');
    const messageValidation = document.getElementById('messageValidation');

    contactForm.addEventListener('submit', function (event) {
      nameValidation.textContent = ''; // Clear previous validation messages
      emailValidation.textContent = '';
      messageValidation.textContent = '';

      if (!contactForm.checkValidity()) {
        event.preventDefault(); // Prevent the form submission if validation fails
        // You can add custom validation messages here
        if (nameField.validity.valueMissing) {
          nameValidation.textContent = 'Please enter your name.';
        }
        if (emailField.validity.valueMissing) {
          emailValidation.textContent = 'Please enter your email.';
        } else if (emailField.validity.typeMismatch) {
          emailValidation.textContent = 'Please enter a valid email address.';
        }
        if (messageField.validity.valueMissing) {
          messageValidation.textContent = 'Please enter your message.';
        }
      }
    });
  });