function loginValidation() {
    var user = document.getElementById("user").value;
    if (user == "") {
        alert("Please enter username")
        return false
    }

    var pw = document.getElementById("psw").value;
    if (pw == "") {
        alert("Please enter password")
        return false
    }
    else {
        
        alert("you are logged in!");
    }
}