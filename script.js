window.onload = function() {

    //VALIDAR SUBMIT
    document.getElementById("formRegister").addEventListener('submit', validateForm);
 
    //INPUTS RETRIVE
    var fname = document.getElementById('name');
    var lastname = document.getElementById('lastname');
    var mail = document.getElementById('email');
    var age = document.getElementById('age');
    var gender = document.getElementsByName('gender');
    var interests = document.getElementsByName('interests');
}