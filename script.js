window.onload = function() {

    //VALIDAR SUBMIT
    document.getElementById("formRegister").addEventListener('submit', validateForm);
 
    var successMsg = false;
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

//VALIDATION FUNCTIONS
//Name and lastname
function validateNames(nln,em){
    // if (fname.value.length < 3) {
    //     em_name.classList.remove('hiddenError');
    // }
    if (nln.value.length < 3) {
        em.classList.remove('hiddenError');
        successMsg = false;
    }
    if (nln.value == null) {
        em.classList.remove('hiddenError');
        successMsg = false;
    }
}    
//Email
function validateEmail(){
    regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!regex.test(mail.value)) {
        em_email.classList.remove('hiddenError');
        successMsg = false;
    }
}
//Age
function validateAge(){
    if (!(age.value >=1) && (age.value<=100)) {
        em_age.classList.remove('hiddenError');
        successMsg = false;
    }
}
//gender
function validateGender(){
    if ((gender[0].checked==false)&&(gender[1].checked==false)&&(gender[2].checked==false)) {
        em_gender.classList.remove('hiddenError');
        successMsg = false;
    }
}
//interests
function validateInterests(){
    var t = interests.length;
    for (let i = 0; i < interests.length; i++) {
        if(interests[i].checked == false){
            t--;
        }
    }
    if (t==0) {
        em_interests.classList.remove('hiddenError');
        successMsg = false;
    }
}

function modal(){
    if (successMsg.value == true) {
        document.getElementById('modalContainer').style.visibility="visible";
    }else{
        document.getElementById('modalContainer').style.visibility="hidden";
    }
}
}