console.log("JS File : deposit.js");

/* ..........
    Function : Calculation : Deposit
.......... */
document.getElementById("btn-deposit").addEventListener("click", function () {
  //console.log("Button Clicked : Deposit");

  const depositCurrent = getInputFieldValueById("field-deposit");
  const depositPreviousTotal = getTextElementValueById("total-deposit");
  const depositNewTotal = depositPreviousTotal + depositCurrent;
  setTextElementValueById("total-deposit", depositNewTotal);

  const totalBalancePrevious = getTextElementValueById("total-amount");
  const totalBalanceCurrent = totalBalancePrevious + depositCurrent;
  setTextElementValueById("total-amount", totalBalanceCurrent);

  //console.log(depositCurrent, depositPreviousTotal, depositNewTotal);
  //console.log(totalBalancePrevious, totalBalanceCurrent);
});
