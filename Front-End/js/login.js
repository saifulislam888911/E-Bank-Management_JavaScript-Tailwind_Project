console.log('JS File : login.js');



/* Note :
   | Step 1 : add click event handler with the Login Button. 
*/
document.getElementById('btn-login').addEventListener('click', function(){

    console.log('Login Button Clicked');

    /* Note :
       | Step 2 : get email
       | 2.a : set id on the html element. 
       | 2.b : get the html element (email address from the inside of the input field). 
       | 2.c : get the value/text from the html element 
               - For input field, 
               use ".value" to get text/value from an input field.
               - For non-input element(element other than input, textarea),
               use ".innerText" to get text/value from an element.
    */
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