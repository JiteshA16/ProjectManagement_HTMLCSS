var xhr = new XMLHttpRequest();

function signUpAPICall(firstName, lastName, email, password, mobile) {
    var params = {
        first_name: firstName.value,
        last_name: lastName.value,
        email_address: email.value,
        password: password.value,
        mobile_number: mobile.value
    }
    xhr.open('POST', 'http://localhost:8080/api/v1/signup');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = registerResponse;
}

function registerResponse() {
    console.log(xhr.readyState);
}