function orderValidation() {
    //var fname = document.getElementById("fn").value;
    //if (fname == "") {
    //    alert("Please enter first name")
    //    return false
    //}

    //var lname = document.getElementById("ln").value;
    //if (lname == "") {
    //    alert("Please enter last name")
    //    return false
    //}

    //var phonenumber = document.getElementById("pn").value;
    //var phoneNum = phonenumber.replace(/[^\d]/g, '');
    //if (phoneNum.length > 6 && phoneNum.length < 11) {


    //} else {
    //    alert("You have entered an invalid phone number");
    //}

    //var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //if (reg.test(email.value) == false) {
    //    alert('Invalid Email Address');
    //    return false;
    //}

    //var lne = document.getElementById("line").value;
    //if (lne == "") {
    //    alert("please enter street address");
    //    return false;
    //}


    //var cty = document.getElementById("city").value;
    //if (cty == "") {
    //    alert("Please enter city")
    //    return false
    //}

    //var st = document.getElementById("state").value;
    //if (st == "") {
    //    alert("Please enter state")
    //    return false
    //}

    //var zp = document.getElementById("zip").value;
    //if (zp == "") {
    //    alert("Please enter zip")
    //    return false
    //}

    var amnt = document.getElementsByName("amount");
    var chc1 = 0

    for (var i = 0; i < amnt.length; i++) {
        if (amnt[i].checked) {
            chc1++;
            break;
        }

    }
    if (!chc1) {
        alert("Please select an amount to be ordered");

    }
    else {

        alert("Your order has been submitted!");
    }




}
