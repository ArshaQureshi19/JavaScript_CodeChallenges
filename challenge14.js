//Coding Challenge 2 of function
//Q using IIFE(imidiatley invoke function expression) to chnge heading color red to blue adding eventlistener to the body

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  // add event listener to bofdy here

  document.body.addEventListener("click", function () {
    header.style.color = "blue";
    // chnage color to ble as click on body
  });
})();
