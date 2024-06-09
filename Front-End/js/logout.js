console.log("JS File : logout.js");

/* ..........
    Function : Logout
.......... */
document.getElementById("btn-logout").addEventListener("click", function () {
  //console.log("logout entered");

  alert("Log out Successful.");

  window.location.href = "index.html";
});
