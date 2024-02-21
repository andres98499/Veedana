emailjs.init("service_x209y7o");
// declaring array, assigning values to variables
const users = [];

// getelementByID grabs id from html code
const signupForm = document.getElementById('signup-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// interacts with the submit button, after info is entered this will apply event
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstNameInput = document.getElementById('first-name').value;
    const lastNameInput = document.getElementById('last-name').value;
    const mobileNumberInput = document.getElementById('mobile-number').value;
    const emailInput = document.getElementById('signup-email').value;
    const genderInput = document.getElementById('gender').value;
    const countryInput = document.getElementById('country').value;
    const languageInput = document.getElementById('language').value;

    // pushing component of it
    users.push({
        firstName: firstNameInput,
        lastName: lastNameInput,
        mobileNumber: mobileNumberInput,
        email: emailInput,
        gender: genderInput,
        country: countryInput,
        language: languageInput
    });
    successMessage.textContent = 'Request Sent Successfully!';
    // You can perform aditional actions here, such as redirecting the user to a login page
    // or clearing the form for another registration
    signupForm.reset();
});

// formHandler.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Additional code to send the form data
});
