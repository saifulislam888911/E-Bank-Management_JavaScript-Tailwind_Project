console.log("JS File : withdraw.js");

/* ..........
    Function : Calculation : Withdraw
.......... */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //console.log("Button Clicked : Withdraw");

  const withdrawCurrent = getInputFieldValueById("field-withdraw");
  const withdrawPreviousTotal = getTextElementValueById("total-withdraw");
  const withdrawNewTotal = withdrawPreviousTotal + withdrawCurrent;
  setTextElementValueById("total-withdraw", withdrawNewTotal);

  const totalBalancePrevious = getTextElementValueById("total-amount");
  const totalBalanceCurrent = totalBalancePrevious - withdrawCurrent;
  setTextElementValueById("total-amount", totalBalanceCurrent);

  //console.log(withdrawCurrent, withdrawPreviousTotal, withdrawNewTotal);
  //console.log(totalBalancePrevious, totalBalanceCurrent);
});
