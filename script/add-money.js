document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const amountConToNum = parseFloat(amount);
    // alert(typeof amountConToNum);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // alert(typeof convertedMainBalance);
    if (amount && pin) {
      if (convertedPin === 1234) {
        let sum = amountConToNum + convertedMainBalance;
        document.getElementById("main-balance").innerText = sum;
        document.getElementById("amount").value = "";
        //   alert(sum);
      } else {
        alert("Pin not ok");
      }
    } else {
      alert("Input amount empty.");
    }
  });
