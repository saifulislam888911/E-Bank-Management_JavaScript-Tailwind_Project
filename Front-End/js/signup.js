console.log("JS File : signup.js");

/* ..........
    Function : signup
.......... */
document.getElementById("btn-signup").addEventListener("click", function () {
  //console.log("Signup Button Clicked");

  const user_name_new = getInputFieldValueStringByID("user-name-new");
  const email_new = getInputFieldValueStringByID("user-email-new");
  const user_password_new = getInputFieldValueStringByID("user-password-new");
  const user_phone = getInputFieldValueStringByID("user-phone");

  /* .......... Validation : Signup .......... */
  if (
    user_name_new == null ||
    user_name_new == "" ||
    user_name_new == undefined
  ) {
    visibilityTypeVisible("vMsg_user-name-new");

    visibilityTypeHidden("vMsg_email-new");
    visibilityTypeHidden("vMsg_password-new");
    visibilityTypeHidden("vMsg_phone-number");
  } else if (email_new == null || email_new == "" || email_new == undefined) {
    visibilityTypeVisible("vMsg_email-new");

    visibilityTypeHidden("vMsg_user-name-new");
    visibilityTypeHidden("vMsg_password-new");
    visibilityTypeHidden("vMsg_phone-number");
  } else if (
    user_password_new == null ||
    user_password_new == "" ||
    user_password_new == undefined
  ) {
    visibilityTypeVisible("vMsg_password-new");

    visibilityTypeHidden("vMsg_email-new");
    visibilityTypeHidden("vMsg_user-name-new");
    visibilityTypeHidden("vMsg_phone-number");
  } else if (
    user_phone == null ||
    user_phone == "" ||
    user_phone == undefined
  ) {
    visibilityTypeVisible("vMsg_phone-number");

    visibilityTypeHidden("vMsg_password-new");
    visibilityTypeHidden("vMsg_email-new");
    visibilityTypeHidden("vMsg_user-name-new");
  } else {
    vMg_SignupField_Hidden();

    alert("Signup Successful.");

    window.location.href = "index.html";
  }
});

/* ..........
    Function : Signup Field Validation Message Hidden
.......... */
function vMg_SignupField_Hidden() {
  visibilityTypeHidden("vMsg_user-name-new");
  visibilityTypeHidden("vMsg_email-new");
  visibilityTypeHidden("vMsg_password-new");
  visibilityTypeHidden("vMsg_phone-number");
}
