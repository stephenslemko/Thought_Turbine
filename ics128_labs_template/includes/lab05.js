
function validateForm() {
    let nameAttempt = document.getElementById("nameInput").value;
    let ageAttempt = document.getElementById("ageInput").value;
    let emailAttempt = document.getElementById("emailInput").value;
    let phoneAttempt = document.getElementById("phoneInput").value;
    let postalAttempt = document.getElementById("postalCodeInput").value;
    let allFieldsGo = false;
    let nameTester = /^[\w! @#$%&’'*+\/\\=?.,`(){|}~^\<\>-]+$/
    let ageTester = /^(?:[0-9]|[1-9][0-9]|1[01][0-9]|120)$/
    let emailTester = /^[\w!#$%&’'*+\/=?`{|}~^-]+(?:\.[\w!#$%&’*+\/=?`{|}~^-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,6}$/
    let phoneTester = /^(?:[0-9]{10}|[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]|[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9])$/
    let postalTester = /^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] [0-9][A-Za-z][0-9]$|(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z][0-9][A-Za-z][0-9]$/
    while (!allFieldsGo) {
        document.getElementById("nameInput").style.borderColor = "blue";
        document.getElementById("ageInput").style.borderColor = "blue";
        document.getElementById("emailInput").style.borderColor = "blue";
        document.getElementById("phoneInput").style.borderColor = "blue";
        document.getElementById("postalCodeInput").style.borderColor = "blue";
        if (!nameTester.test(nameAttempt)) {
            alert("Please enter a valid name");
            document.getElementById("nameInput").style.borderColor = "red";
            return false;
        }
        else if (!ageTester.test(ageAttempt)) {
            alert("Please enter a valid age from 0-120");
            document.getElementById("ageInput").style.borderColor = "red";
            return false;
        }
        else if (!emailTester.test(emailAttempt)) {
            alert("Please enter a vaild email");
            document.getElementById("emailInput").style.borderColor = "red";
            return false;
        }
        else if (!phoneTester.test(phoneAttempt)) {
            alert("Please enter a valid phone number");
            document.getElementById("phoneInput").style.borderColor = "red";
            return false;
        }
        else if (!postalTester.test(postalAttempt)) {
            alert("Please enter a vaild canadian postal code");
            document.getElementById("postalCodeInput").style.borderColor = "red";
            return false;
        }
        else {
            alert("Thank you for giving me your information\nPromise I won't sell it");
            allFieldsGo = true;
            return true;
        }
    }
}
