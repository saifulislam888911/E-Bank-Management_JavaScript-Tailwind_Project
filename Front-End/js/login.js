console.log("JS File : login.js");

/* ..........
    Function : Login
.......... */
document.getElementById("btn-login").addEventListener("click", function () {
  //console.log('Login Button Clicked');

  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //console.log(email, password);

  /* .......... Validation : Login .......... */
  if (email == "admin" && password == "admin") {
    vMg_LoginField_Hidden();

    alert("Login Successful.");

    window.location.href = "user_Profile.html";
  } else {
    if (email == null || email == "" || email == undefined) {
      visibilityTypeVisible("vMsg_email");

      visibilityTypeHidden("vMsg_password");
    } else if (password == null || password == "" || password == undefined) {
      visibilityTypeVisible("vMsg_password");

      visibilityTypeHidden("vMsg_email");
    } else {
      vMg_LoginField_Hidden();

      alert("Incorrect Email or Password.");
    }
  }
});

/* ..........
    Function : Login Field Validation Message Hidden
.......... */
function vMg_LoginField_Hidden() {
  visibilityTypeHidden("vMsg_email");
  visibilityTypeHidden("vMsg_password");
}
