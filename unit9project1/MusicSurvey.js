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
        document.getElementById("email").value = "";
    } else if(test == true) {
        alert("The email is valid");
    }
}
function reset(){
    document.getElementById("rock").checked = false;
    document.getElementById("hardrock").checked = false;
    document.getElementById("metal").checked = false;
    document.getElementById("heavymetal").checked = false;
    document.getElementById("pop").checked = false;
    document.getElementById("r&b").checked = false;
    document.getElementById("hiphop").checked = false;
    document.getElementById("punk").checked = false;
    document.getElementById("electronic").checked = false;
    document.getElementById("jazz").checked = false;
    document.getElementById("classical").checked = false;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textbox").value = "";  
}