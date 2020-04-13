const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Input Error Message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

// Show Input Success Message

function showSuccess(input){
const formControl = input.parentElement;
formControl.className='form-control success';

}

//=====Email Validation===============

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(email.value.trim())) {
        showSuccess(email);
    }
    else{
        showError(email,'Email is not valid');
    }
}

//Check Required Fields

function checkRequirement(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()==''){
            showError(input,`${getFieldName(input)} Is required`);

        }else{
            showSuccess(input);
        }
    });
}

//Check input length

function checkLength(input,min,max){
    if(input.value.length<min){

        showError(input,`${getFieldName(input)} must be at least ${min} charecters`);
   
    }else if(input.value.length>max){

        showError(input,`${getFieldName(input)} must be less than ${max} charecters`);
       }
       else
       {
           showSuccess(input);
       }

}

//Check Password Match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value){
     showError(input2,'Password do not match');
    }
    else
    {
        showSuccess(input2);
    }
}


function getFieldName   (input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener('submit', function(e){
e.preventDefault();

checkRequirement([username,email,password,password2]);
checkLength(username,3,15);
checkLength(password,6,25);
isValidEmail(email);
checkPasswordMatch(password,password2);

} );