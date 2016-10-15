function validate() {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var opinion = document.getElementById("opinion").value;
    var rating = document.getElementById("rating").value;
    var filled = true;
    var validemail = true;
    if((firstname == "") || (lastname == "") || (opinion == "")) {
        alert("Please Fill out all fields");
        filled = false;
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(email);
    if(test == false) {
        alert("The email is not valid");
        document.getElementById("email").value = "";
        validemail=false;
    }
    if(filled == true && validemail == true) {
        alert("Your opinion has been submitted. Thank You! for your opinion");
        document.getElementById("email").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("opinion").value = "";
    }
}