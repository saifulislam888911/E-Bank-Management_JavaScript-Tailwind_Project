console.log('JS File : utilities.js');



function getInputFieldValueById(inputFieldId)
{
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);

    inputField.value = '';

    return inputFieldValue;
}



function getTextElementValueById(textElementId)
{
    const textElement = document.getElementById(textElementId);
    const textElementValue = parseFloat(textElement.innerText);

    return textElementValue;
}



function setTextElementValueById(textElementId, newValue)
{
    const textElement = document.getElementById(textElementId);
  
    textElement.innerText = newValue;
}




