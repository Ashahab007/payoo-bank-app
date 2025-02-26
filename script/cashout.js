// beginner way of logic without using shared function

/* document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    // console.log(event);
    event.preventDefault(); // prevent auto reload in cashout
    const cashOutAmount = document.getElementById("cashout-amount").value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (cashOutAmount) {
      let sum = convertedMainBalance - convertedCashOutAmount;
      if (sum <= 0) {
        alert("Not Enough Balance");
      } else {
        document.getElementById("main-balance").innerText = sum;
        document.getElementById("cashout-amount").value = "";
        //   alert(sum);
      }
    } else {
      alert("Input Cashout Amount empty");
    }
  }); */

// Advance way of logic using shared function from utility.js file

document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    // console.log(event);
    event.preventDefault(); // prevent auto reload in cashout
    const cashOutAmount = inputValidationId("cashout-amount");
    // alert(cashOutAmount);
    const mainBalance = getInnerTextById("main-balance");
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    const accountNumber = document.getElementById("account-number").value;

    if (cashOutAmount) {
      let sum = mainBalance - cashOutAmount;
      if (sum <= 0) {
        alert("Not Enough Balance");
      } else {
        setInnerTextByIdandValue("main-balance", sum);
        document.getElementById("cashout-amount").value = "";
        let p = document.createElement("p");
        p.innerHTML = `
        Withdraw ${cashOutAmount} from Account No: ${accountNumber}
        .`;
        transactionContainer.appendChild(p);
      }
    } else {
      alert("Input cashout amount empty");
    }
  });
