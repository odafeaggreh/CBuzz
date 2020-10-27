const formLogin = document.getElementById('formLogin');
const logInEmail = document.getElementById('logInEmail');
const LogInPassword = document.getElementById('LogInPassword');









formLogin.addEventListener('submit', (e) =>{
    if(!checkLogInInput()){
        e.preventDefault();
        return false
    }else{
        e.submit;
        return true
    }
});


function checkLogInInput(){
    const logInEmailValue = logInEmail.value.trim();
    const LogInPasswordValue = LogInPassword.value.trim();


    if(logInEmailValue === ''){
        setErrorFor(logInEmail, 'Email cannot be blank');
    }else if(!isEmail(logInEmailValue)){
        setErrorFor(logInEmail, 'Invalid Email');
    }else{
        setSuccessFor(logInEmail);
    }


    if(LogInPasswordValue === ''){
        setErrorFor(LogInPassword, 'Password cannot be blank');
    }else{
        setSuccessFor(LogInPassword);
    }
}


function setErrorFor(input, message){
    const formContol = input.parentElement;

    const small = formContol.querySelector('small');

    small.innerText = message

    formContol.className = 'formControl error';
}


function setSuccessFor(input){
    const formContol = input.parentElement;




    formContol.className = ' formControl success';
}


function isEmail(logInEmail){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(logInEmail);
}


// Show and hide password function
function showPassword1(){
    if(LogInPassword.type === "password"){
        LogInPassword.type = "text";
        document.getElementById('eye').style.visibility = "hidden";
        document.getElementById('eye-slash').style.visibility = "visible";
    }else{
        LogInPassword.type = "password";
        document.getElementById('eye').style.visibility = "visible";
        document.getElementById('eye-slash').style.visibility = "hidden";
    }
}
