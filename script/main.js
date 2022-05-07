const form=document.getElementById('login_validate');
let flag =0;
form.addEventListener('submit',function(event){
    if(!validate(homeRedirect)){
        event.preventDefault();
    }
})
function validate(homeredirect){
    let email= document.getElementById('exampleInputEmail1');
    let password = document.getElementById('exampleInputPassword1');
   //username and password check
    if((email.value)=='admin' && (password.value)=='12345'){
       flag=1;
       homeredirect(flag);//call back function call
    }
    else{
        error.innerHTML='<p><i class="bi bi-exclamation-triangle"></i>  You entered an incorrect username or password. Please try again.</p>';
        error.style.color='black';
        error.style.backgroundColor='#fadcd9';
        error.style.padding='20px';
        return false;
    }
    
}
//callback function to redirect into todolist page
function homeRedirect(flag){
     if(flag==1){
           location.replace("todolist.html");
           
    }
}
