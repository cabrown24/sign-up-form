const confirmedPassword = document.querySelector('#cpassword');

confirmedPassword.addEventListener('input', () => {
    console.log("change recognized");
    const password = document.querySelector('#password');
    let pass = password.value;
    if(confirmedPassword.value !== password.value) {
        confirmedPassword.setCustomValidity("Password does not match");
        password.style.borderColor = "red";
        confirmedPassword.style.borderColor = "red";
    }

    else {
        confirmedPassword.setCustomValidity("");
        password.style.border = "yellowgreen 1px solid";
        confirmedPassword.style.border = "yellowgreen 1px solid";
    }
});

