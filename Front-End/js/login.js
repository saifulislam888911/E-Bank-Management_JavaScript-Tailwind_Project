console.log('JS File : login.js');



document.getElementById('btn-login').addEventListener('click', function(){
    //console.log('Login Button Clicked');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(emailField, passwordField);
    console.log(email, password);



    if((email == null || email == "" || email == undefined) || (password == null || password == "" || password == undefined))
    {
      alert("Incorrect Email or Password.") 
    }
    else{
      alert("Log in Successful.")

      window.location.href = 'user_Profile.html';
    }
})