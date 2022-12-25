// Your code here
//const dodger = document.getElementById("dodger");
//dodger.style.backgroundColor = "#FF69B4";
//dodger.style.bottom = "100px";
//dodger.style.bottom = "0px";
//dodger.style.left = "0px";

//const dodger = document.getElementById("dodger");
//document.addEventListener("keydown", function (e)) {
   // if (e.key === "ArrowLeft") {
//function moveDodgerLeft() }
   // const leftNumbers = dodger.style.left.replace("px", "");
   // const left = parseInt(leftNumbers, 10);
  
  //  if (left > 0) {
   //   dodger.style.left = `${left - 1}px`;
   // }
  //}

  const dodger = document.getElementById("dodger");
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  const dodgerRight = document.getElementById("dodger");
  function moveDodgerRight() {
    const rightNumbers = dodgerRight.style.right.replace("", "px");
    const right = parseInt(rightNumbers, 180);
  
    if (right < 0) {
      dodgerRight.style.right = `${right + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });