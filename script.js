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
    
     let checkEmail = input => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
        if(re.test(input.value.trim())){
           showSuccess(input);
        }else{
            showError(input, `${getFieldName(input)} is not valid`)
        }
     }
     
     //check password match..
     
     let checkPasswordMatch = (input1, input2) =>{
         
         if(input1.value !== input2.value){
             showError(input2, `${getFieldName(input2)} do not match.`)
         }
     }
     
     //Check Required fields
     
     let checkRequriredFields = (inputArr) =>{
         inputArr.forEach( input =>{
            if(input.value.trim() === ''){
                showError(input, `${getFieldName(input)} is required`)
            }else{
                showSuccess(input)
            }
         })
     }
     
     //checklength of the input..
     
     let checkLength = (input, min, max) =>{
         if(input.value.length < min){
             showError(input, `${getFieldName(input)} must be at least ${min} charecters`);
         }else if( input.value.length > max){
             showError(input, `${getFieldName(input)} must me less than ${max} characters`)
         }else{
             showSuccess(input);
         }
     }
     
     //get uppercased first letter of each field
     function getFieldName(input){
         return input.id.charAt(0).toUpperCase() + input.id.slice(1);
     }
     
    //Event Listener..
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        //improved validation..
        //pass all required validation fiels as an array..
        checkRequriredFields([username, email, password, password2]);
        checkLength(password, 3, 12);
        checkEmail(email);
        checkPasswordMatch(password, password2)
       
    });
})();