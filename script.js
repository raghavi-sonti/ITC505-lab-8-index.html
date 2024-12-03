let currentStep = 1;

function nextStep(step) {
    const isValid = validateStep(currentStep);
    if (isValid) {
        document.getElementById(step-${currentStep}).style.display = 'none';
        currentStep = step;
        document.getElementById(step-${currentStep}).style.display = 'block';
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progress = (currentStep - 1) * 33;
    document.getElementById('progress').style.width = ${progress}%;
}

function validateForm() {
    // Final validation when submitting the form
    const isStep1Valid = validateStep(1);
    const isStep2Valid = validateStep(2);
    const isStep3Valid = validateStep(3);
    
    return isStep1Valid && isStep2Valid && isStep3Valid;
}

function validateStep(step) {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (step === 1) {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();

        if (firstName === "") {
            document.getElementById("firstNameError").innerText = "First name is required.";
            isValid = false;
        }

        if (lastName === "") {
            document.getElementById("lastNameError").innerText = "Last name is required.";
            isValid = false;
        }
    }

    if (step === 2) {
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email === "") {
            document.getElementById("emailError").innerText = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
            isValid = false;
        }
    }

    if (step === 3) {
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (password === "") {
            document.getElementById("passwordError").innerText = "Password is required.";
            isValid = false;
        }

        if (confirmPassword === "") {
            document.getElementById("confirmPasswordError").innerText = "Confirm password is required.";
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
            isValid = false;
        }
    }

    return isValid;
}