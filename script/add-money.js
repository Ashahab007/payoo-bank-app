// beginner way of logic without using shared function
/* document
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
  }); */

// Advance way of logic using shared function from utility.js file
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = inputValidationId("amount");
    // alert(amount);
    const pin = inputValidationId("pin");
    const mainBalance = getInnerTextById("main-balance");
    const accountNumber = document.getElementById("account-number").value;
    if (amount && pin) {
      if (pin === 1234) {
        let sum = amount + mainBalance;
        setInnerTextByIdandValue("main-balance", sum);
        document.getElementById("amount").value = "";
        const transactionContainer = document.getElementById(
          "transaction-container"
        );

        let p = document.createElement("p");
        p.innerHTML = `
        Added ${amount} taka from Account Number: ${accountNumber}
        `;
        transactionContainer.appendChild(p);
      } else {
        alert("Pin not ok");
      }
    } else {
      alert("Input amount empty.");
    }
  });
