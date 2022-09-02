
function loginValidation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == "vishal" && password == "1234") {
        window.location.href = "https://stackoverflow.com/";
    }
    else {
        alert("Invalid UserName and Password");
    }
}