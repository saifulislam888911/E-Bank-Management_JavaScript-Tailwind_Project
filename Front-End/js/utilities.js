console.log("JS File : utilities.js");

/* ..........
    On Page Load : 
.......... */
document.addEventListener("DOMContentLoaded", function () {
  onPageRefresh();
});

/* ..........
    Function : Get Input-Field Value-String By Id 
.......... */
function getInputFieldValueStringByID(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;

  //inputField.value = "";

  return inputFieldValueString;
}

/* ..........
    Function : Get Input-Field Value By Id 
.......... */
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputField.value);

  //inputField.value = "";

  return inputFieldValue;
}

/* ..........
    Function : Get Html-Element Value-String By Id 
.......... */
function getHtmlElementValueStringById(htmlElementId) {
  const htmlElement = document.getElementById(htmlElementId);
  const htmlElementValueString = htmlElement.innerHTML;

  return htmlElementValueString;
}

/* ..........
    Function : Get Text-Element Value-String By Id 
.......... */
function getTextElementValueStringById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValueString = textElement.innerText;

  return textElementValueString;
}

/* ..........
    Function : Get Text-Element Value By Id 
.......... */
function getTextElementValueById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValue = parseFloat(textElement.innerText);

  return textElementValue;
}

/* ..........
    Function : Set Text-Element Value By Id 
.......... */
function setTextElementValueById(textElementId, newValue) {
  const textElement = document.getElementById(textElementId);

  textElement.innerText = newValue;
}

/* ..........
    Function : Value Reset
.......... */
function resetInputFieldComponent(inputField_Component_Id, newValue) {
  const inputField_Component = document.getElementById(inputField_Component_Id);

  inputField_Component.value = newValue;
}

/* ..........
    Function : Value Reset on Page Load
.......... */
function onPageRefresh() {
  resetInputFieldComponent("user-email", "");
  resetInputFieldComponent("user-password", "");
  visibilityTypeHidden("vMsg_email");
  visibilityTypeHidden("vMsg_password");

  resetInputFieldComponent("user-name-new", "");
  resetInputFieldComponent("user-email-new", "");
  resetInputFieldComponent("user-password-new", "");
  resetInputFieldComponent("user-phone", "");
  visibilityTypeHidden("vMsg_user-name-new");
  visibilityTypeHidden("vMsg_email-new");
  visibilityTypeHidden("vMsg_password-new");
  visibilityTypeHidden("vMsg_phone-number");
}

/* ..........
    Function : Display Type
.......... */
function displayTypeBlock(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.display === "none") {
    component.style.display === "block";
  }
}

function displayTypeNone(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.display === "block") {
    component.style.display === "none";
  }
}

function displayTypeAuto(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.display === "none") {
    component.style.display === "block";
  } else if (component.style.display === "block") {
    component.style.display = "none";
  }
}

/* ..........
    Function : Visibility Type 
.......... */
function visibilityTypeVisible(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.visibility === "hidden") {
    component.style.visibility = "visible";
  }
}

function visibilityTypeHidden(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.visibility === "visible") {
    component.style.visibility = "hidden";
  }
}

function visibilityTypeAuto(component_Id) {
  const component = document.getElementById(component_Id);

  if (component.style.visibility === "hidden") {
    component.style.visibility = "visible";
  } else if (component.style.visibility === "visible") {
    component.style.visibility = "hidden";
  }
}
