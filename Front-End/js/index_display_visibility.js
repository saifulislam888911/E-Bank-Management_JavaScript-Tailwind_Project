console.log("JS File : index_display_visibility.js");

const req_login_display = document.getElementById("req-login-display");
const div_login = document.getElementById("div-login");
const dflt_email_pass_vis = document.getElementById("dflt-email-pass-vis");

const req_signup_display = document.getElementById("req-signup-display");
const div_signup = document.getElementById("div-signup");

/* ..........
    Function : Showing Signup Form
.......... */
function displaySignupForm() {
  onPageRefresh();

  req_signup_display.style.display = "none";

  if (req_signup_display.style.display === "none") {
    div_login.style.display = "none";
    dflt_email_pass_vis.style.visibility = "hidden";

    div_signup.style.display = "block";
    req_login_display.style.display = "block";
  }
}

/* ..........
    Function : Showing Login Form
.......... */
function displayLoginForm() {
  onPageRefresh();

  req_login_display.style.display = "none";

  if (req_login_display.style.display === "none") {
    div_signup.style.display = "none";

    div_login.style.display = "block";
    req_signup_display.style.display = "block";
    dflt_email_pass_vis.style.visibility = "visible";
  }
}
