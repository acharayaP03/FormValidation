 /* Scripts */ 
(function(){
   'use strict'
    
    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');
    
    //show input error and message..
    
    let showError = (input, message) =>{
        let formControl = input.parentElement;
        formControl.className = 'form-control error';
        
        let small = formControl.querySelector('small');
        small.innerText = message;
    }
    
    //Show success outline..
     let showSuccess = input =>{
         let formControl = input.parentElement;
         formControl.className = 'form-control success'
     }
    
     let isValidEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
     }
    //Event Listener..
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        if(username.value === ''){
            showError(username, `${username.id} is required.`)
            username.focus();
        }else{
            showSuccess(username);
        }
        
        if(email.value === ''){
            showError(email, `${email.id} is required.`)
            email.focus();
        }else if(!isValidEmail(email.value)){
            showError(email, 'Not a valid email!')
        }else{
            showSuccess(email);
        }
        
        if(password.value === ''){
            showError(password, `${password.id} is required.`)
            password.focus();
        }else{
            showSuccess(password);
        }
        
        if(password2.value === ''){
            showError(password2, `${password2.id} is required.`)
            password2.focus();
        }else{
            showSuccess(password2);
        }
       
    });
})();