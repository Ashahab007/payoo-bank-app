document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    toggleFunction("add-money-section", "none");
    toggleFunction("cashout-section", "none");
    toggleFunction("transaction-section", "block");
  });
