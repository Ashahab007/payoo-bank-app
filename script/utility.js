// Input data validation
function inputValidationId(id) {
  const selectId = document.getElementById(id).value;
  const convertedId = parseFloat(selectId);
  return convertedId;
}

//InnerText data conversion
function getInnerTextById(id) {
  const text = document.getElementById(id).innerText;
  const convertedText = parseFloat(text);
  return convertedText;
}

// InnerText data set with main balance
function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value; //Here return is not used because we are setting the value
}
