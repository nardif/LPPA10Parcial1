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

  //ERROR MESSAGES
var em_name = document.getElementById('em_name');
var em_lastname = document.getElementById('em_lastname');
var em_email = document.getElementById('em_email');
var em_age = document.getElementById('em_age');
var em_gender = document.getElementById('em_gender');
var em_interests = document.getElementById('em_interests');

}