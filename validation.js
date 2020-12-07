function validateForm() {
    if(isFirstName() && isLastName())
    return true;
    else return false;
}

function isFirstName() {
    let firstName = document.getElementById("firstName");
    console.log('First Name' + firstName);
    if (firstName.value.length < 2 ) {
        alert("Warning: First name must contain two or more characters.");
       // document.getElementById('firstNameError').innerText = "First Name two more";
        firstName.focus();
        return false;
    } else if (!isLetter(firstName)) {
        alert("Warning: First name must contain only letters.");
        firstName.focus();
        return false;
    } else {
        return true;
    }
}

function isLastName() {
    var lastName = document.getElementById("lastName");
    if (lastName.value.length < 2 ) {
        alert("Warning: Last name must contain two or more characters.");
        lastName.focus();
        return false;
    } else if (!isLetter(lastName)) {
        alert("Warning: Last name must contain only letters.");
        lastName.focus();
        return false;
    } else {
        return true;
    }
}

function isLetter(input) {
    var letters = /^[A-Za-z]+$/;
    if(input.value.match(letters)) {
        return true;
    }
    return false;
}


