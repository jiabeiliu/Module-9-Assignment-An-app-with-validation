document.getElementById('pizzaForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    let formIsValid = true;
    let errorMessage = '';

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((elem) => {
        elem.style.display = 'none';
    });

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        showError('name', 'Name must be at least 3 characters long.');
        formIsValid = false;
    }

    // Year of birth validation
    const yearOfBirth = document.getElementById('yearOfBirth').value;
    if (yearOfBirth < 1900 || yearOfBirth > 2100) {
        showError('yearOfBirth', 'Year of birth must be between 1900 and 2100.');
        formIsValid = false;
    }

    // Zipcode validation
    const usResident = document.getElementById('usResident').checked;
    const zipcode = document.getElementById('zipcode').value;
    if (usResident) {
        if (!zipcode.match(/^\d{5}$/)) {
            showError('zipcode', 'Zipcode must be a 5-digit number.');
            formIsValid = false;
        }
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        showError('password', 'Password must be at least 8 characters long.');
        formIsValid = false;
    }

    // Preferred type of pizza validation
    const pizzaPreference = document.getElementById('pizzaPreference').value;
    if (pizzaPreference === "") {
        showError('pizzaPreference', 'You must select a preferred type of pizza.');
        formIsValid = false;
    }

    // Show form accepted message or stay on form for corrections
    const formResult = document.getElementById('formResult');
    if (formIsValid) {
        formResult.textContent = 'Form Accepted!';
        formResult.style.color = 'green';
    } else {
        formResult.textContent = 'Please correct the errors above.';
        formResult.style.color = 'red';
    }
});

function showError(fieldId, message) {
    const errorSpan = document.querySelector(`#${fieldId}`).parentNode.querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}
