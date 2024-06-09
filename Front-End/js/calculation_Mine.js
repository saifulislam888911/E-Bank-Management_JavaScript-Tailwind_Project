console.log("JS File : calculation_Mine.js");

let depositCurrent, depositPreviousTotal, depositTotal;
let withdrawCurrent, withdrawPreviousTotal, withdrawTotal;

/* ..........
    Function : Calculation : Deposit
.......... */
document.getElementById("btn-deposit").addEventListener("click", function () {
  //console.log('Button Clicked : Deposit');

  const depositField = document.getElementById("field-deposit");
  depositCurrent = parseFloat(depositField.value);

  const depositTotalElement = document.getElementById("total-deposit");
  depositPreviousTotal = parseFloat(depositTotalElement.innerText);

  if (depositCurrent != 0 && !isNaN(depositCurrent)) {
    depositTotal = depositPreviousTotal + depositCurrent;
    depositTotalElement.innerText = depositTotal;

    totalBalanceCalculation();
  } else {
    alert("Please Enter valid amount.");
  }

  //console.log(depositCurrent, depositPreviousTotal, depositTotal);

  depositField.value = "";
  depositCurrent = null;
  depositPreviousTotal = null;
  depositTotal = null;
});

/* ..........
    Function : Calculation : Withdraw
.......... */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //console.log('Button Clicked : Withdraw');

  const withdrawField = document.getElementById("field-withdraw");
  withdrawCurrent = parseFloat(withdrawField.value);

  const withdrawTotalElement = document.getElementById("total-withdraw");
  withdrawPreviousTotal = parseFloat(withdrawTotalElement.innerText);

  const remainingBalance = parseFloat(
    document.getElementById("total-amount").innerHTML
  );

  if (
    withdrawCurrent <= remainingBalance &&
    withdrawCurrent != 0 &&
    !isNaN(withdrawCurrent)
  ) {
    withdrawTotal = withdrawPreviousTotal + withdrawCurrent;
    withdrawTotalElement.innerText = withdrawTotal;

    totalBalanceCalculation();
  } else {
    if (withdrawCurrent == 0 || isNaN(withdrawCurrent)) {
      alert("Please Enter valid amount.");
    } else {
      alert("No Sufficient Balance.");
    }
  }

  //console.log(withdrawCurrent, withdrawPreviousTotal, withdrawTotal);

  withdrawField.value = "";
  withdrawCurrent = null;
  withdrawPreviousTotal = null;
  withdrawTotal = null;
});

/* ..........
    Function : Calculation : Total Balance
.......... */
function totalBalanceCalculation() {
  const totalBalance = document.getElementById("total-amount");
  const totalBalancePrevious = parseFloat(totalBalance.innerText);

  if (depositTotal > depositPreviousTotal) {
    const totalBalanceCurrent = totalBalancePrevious + depositCurrent;
    totalBalance.innerText = totalBalanceCurrent;

    //console.log(totalBalancePrevious, totalBalanceCurrent);
  }
  if (withdrawTotal > withdrawPreviousTotal) {
    const totalBalanceCurrent = totalBalancePrevious - withdrawCurrent;
    totalBalance.innerText = totalBalanceCurrent;

    //console.log(totalBalancePrevious, totalBalanceCurrent);
  }
}
