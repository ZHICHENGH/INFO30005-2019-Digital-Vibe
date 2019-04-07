
function getFormValue() {
    var nameForm = document.getElementById("formName");
    var i;
    var firstName;
    var lastName;

    firstName = nameForm.elements[0].value;
    lastName = nameForm.elements[1].value;

    document.getElementById("output").innerHTML = firstName + " " + lastName;
}
