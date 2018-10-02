function contactValidation() {
    var fname = document.getElementById("fn").value;
    if (fname == "") {
        alert("Please enter first name")
        return false
    }

    var lname = document.getElementById("ln").value;
    if (lname == "") {
        alert("Please enter last name")
        return false
    }

    var phonenumber = document.getElementById("pn").value;
    var phoneNum = phonenumber.replace(/[^\d]/g, '');
    if (phoneNum.length > 6 && phoneNum.length < 11) {


    } else {
        alert("You have entered an invalid phone number");
    }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    
}