document
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
  });
