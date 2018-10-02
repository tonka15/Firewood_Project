function signupValidation() {

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

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(mail.value) == false) {
            alert('Invalid Email Address');
            return false;
        }

        var lne = document.getElementById("line").value;
        if (lne == "") {
            alert("please enter street address");
            return false;
        }


        var cty = document.getElementById("city").value;
        if (cty == "") {
            alert("Please enter city")
            return false
        }

        var st = document.getElementById("state").value;
        if (st == "") {
            alert("Please enter state")
            return false
        }

        var zp = document.getElementById("zip").value;
        if (zp == "") {
            alert("Please enter zip")
            return false
        }

        var user = document.getElementById("user").value;
        if (user == "") {
            alert("Please enter a username")
            return false
        }
        var pw = document.getElementById("psw").value;
        if (pw == "") {
            alert("Please enter a password")
            return false
        }

        var repeat = document.getElementById("repeat").value;
        if (repeat == "") {
            alert("Please re-enter password")
            return false
        }
        else {

            alert("You have successfully created an account!");
        }
    }
}