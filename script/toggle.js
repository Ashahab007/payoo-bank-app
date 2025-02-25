// ! prevent auto reload in cashout

document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    // console.log(event);
    event.preventDefault();
  });

document.getElementById("cashout-section").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
});
