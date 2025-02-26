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
    if (amount < 0) {
      alert("Negative value not allowed.");
      return;
    }
    if (amount && pin) {
      if (pin === 1234) {
        let sum = amount + mainBalance;
        setInnerTextByIdandValue("main-balance", sum);
        document.getElementById("amount").value = "";

        //Adding to transaction history
        const transactionContainer = document.getElementById(
          "transaction-container"
        );

        let selectedBank = document.getElementById("allbank").value;
        // alert(selectedBank);

        let div = document.createElement("div");
        div.classList.add("bg-red-100");
        div.classList.add("p-2");
        div.innerHTML = `
        Added Money from ${selectedBank} 
        ${amount} taka from Account Number: ${accountNumber}.
        `;
        transactionContainer.appendChild(div);
      } else {
        alert("Pin not ok");
      }
    } else {
      alert("Input amount empty.");
    }
  });
