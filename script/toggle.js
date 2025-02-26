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

function toggleFunction(id1, id2) {
  document.getElementById(id1).style.display = "block";
  document.getElementById(id2).style.display = "none";
}

document.getElementById("add-money-box").addEventListener("click", function () {
  toggleFunction("add-money-section", "cashout-section");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  toggleFunction("cashout-section", "add-money-section");
});
