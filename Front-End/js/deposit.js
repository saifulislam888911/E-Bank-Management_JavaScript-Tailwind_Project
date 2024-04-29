console.log('JS File : deposit.js');



document.getElementById('btn-deposit').addEventListener('click', function(){
    console.log('Deposit Button Clicked');



    const depositField = document.getElementById('field-deposit');
    const depositCurrent = depositField.value;

    const depositTotalElement = document.getElementById('total-deposit');
    const depositPreviousTotal = depositTotalElement.innerText;



    const depositTotal = (depositPreviousTotal + depositCurrent);
    depositTotalElement.innerText = depositTotal;

    

    console.log(depositCurrent, depositPreviousTotal, depositTotal); 
});