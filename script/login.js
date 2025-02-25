document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    // console.log(event);
    event.preventDefault(); //preventDefault is used for prevent the data erasing from input field after click login button.
    const accountNumber = document.getElementById("account-number").value;
    // console.log(accountNumber);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    console.log(pin);
    if (accountNumber.length === 11) {
      // console.log("account number ok");
      if (convertedPin === 1234) {
        window.location.href = "./main.html"; //open the expected page
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid account number");
    }
  });
