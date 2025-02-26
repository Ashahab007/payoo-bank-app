// !Toggling between add Money & Cash out
// beginner way of logic without using shared function

/* document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
  });
  
  document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";
    }); */

// !Toggling between add Money & Cash out using shared function (Advance)

document.getElementById("cashout-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";

function toggleFunction(id, status) {
  document.getElementById(id).style.display = status;
}

document.getElementById("add-money-box").addEventListener("click", function () {
  toggleFunction("add-money-section", "block");
  toggleFunction("cashout-section", "none");
  toggleFunction("transaction-section", "none");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  toggleFunction("cashout-section", "block");
  toggleFunction("add-money-section", "none");
  toggleFunction("transaction-section", "none");
});
