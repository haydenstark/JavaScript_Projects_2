function validateForm() {
    var x = document.forms["basicForm"]["firstName"].value;
    var y = document.forms["basicForm"]["lastName"].value;
    var z = document.forms["basicForm"]["email"].value;
    if (x == "" || y=="" || z=="") {
        alert("Fill out required areas");
        return false;
    }
}
