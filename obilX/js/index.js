//const form = document.querySelector('#sign-up-form') ;
//const submitBtn = document.querySelector('#submitBtn');
function matchpass(){  
    var firstpassword=document.f1.password.value;  
    var secondpassword=document.f1.password2.value;  
      
    if(firstpassword==secondpassword){  
    return true;  
    }  
    else{  
    alert("password must be same!");  
    return false;  
    }  
    }  