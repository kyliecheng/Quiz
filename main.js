// ANSWERS

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let numCorrect = 0;

  // Mark Question #1
  let answer1 = document.getElementById("q1-in").value;

  if (answer1 === "circle") {
    numCorrect++;
    document.getElementById("q1-out").innerHTML = "Correct";
  } else {
    document.getElementById("q1-out").innerHTML = "Incorrect";
  }

  // Mark Question #2
  let answer2 = document.getElementById("q2-in").value;

  if (answer2 === "octagon") {
    numCorrect++;
    document.getElementById("q2-out").innerHTML = "Correct";
  } else {
    document.getElementById("q2-out").innerHTML = "Incorrect";
  }

  // Mark Question #3
  let answer3 = document.getElementById("q3-in").value;
  if (answer3 === "hexagon") {
    numCorrect++;
    document.getElementById("q3-out").innerHTML = "Correct";
  } else {
    document.getElementById("q3-out").innerHTML = "Incorrect";
  }

  // Mark Question #4
  let answer4 = document.getElementById("q4-in").value;
  if (answer4 === "icosagon") {
    numCorrect++;
    document.getElementById("q4-out").innerHTML = "Correct";
  } else {
    document.getElementById("q4-out").innerHTML = "Incorrect";
  }

  // Calculate the percentage
  let percent = (numCorrect / 4) * 100;

  //Output score and percentage
  document.getElementById("total").innerHTML = numCorrect;
  document.getElementById("percent").innerHTML = percent;

  // Output feedback
  if (answer1 === "circle") {
    alert("Good Job");
  } else {
    alert("Better luck next time.");
  }
  if (answer2 === "octagon") {
    alert("Good Job");
  } else {
    alert("Better luck next time.");
  }
  if (answer3 === "hexagon") {
    alert("Good Job");
  } else {
    alert("Better luck next time.");
  }
  if (answer4 === "icosagon") {
    alert("Good Job");
  } else {
    alert("Better luck next time.");
  }
}
