function validate(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    if(name == "") {
        alert("Name is empty please enter a name");
    }
    if(email == "") {
        alert("Email is empty please enter an email");
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(email);
    if(test == false) {
        alert("The email is not valid");
    } else if(test == true) {
        alert("The email is valid");
    }
}