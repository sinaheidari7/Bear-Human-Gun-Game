function getUserChoice(){

  var output = document.getElementById("output");
  var input = (prompt("Enter your character"))
  var input = input.toLowerCase();

  if (input == "bear"){
    var yChoice = 0;
  }

  if (input == "human"){
    var yChoice = 1;
  }

  if (input == "gun"){
    var yChoice = 2;
  }

  if(input == "human"|| input == "bear"|| input == "gun"){
    output.innerHTML = "Your choice: " + input + "<br>";



  // Computer Choice
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0){
      var choice = "bear";
      output.innerHTML += "Computer's Choice: " + choice + "<br>";
    } 

    else if(randomNumber == 1){
      var choice = "human";
      output.innerHTML += "Computer's Choice: " + choice + "<br>";
    }

    else if (randomNumber == 2){
      var choice = "gun";
      output.innerHTML += "Computer's Choice: " + choice + "<br>";
    }

    // **To determine winner** //


    // Tie
    if (yChoice == randomNumber){
      output.innerHTML += "Tie";
    }

    else if (yChoice == 0 && randomNumber == 1){
      output.innerHTML += "You Win!";
    }

    else if (yChoice == 0 && randomNumber == 2){
      output.innerHTML += "You Lose!";
    }

    else if (yChoice == 1  && randomNumber == 0){
      output.innerHTML += "You lose!";
    }

    else if (yChoice == 1 && randomNumber == 2){
      output.innerHTML += "You Win!";
    }

    else if (yChoice == 2 && randomNumber == 0){
      output.innerHTML += "You Win!";
    }

    else if (yChoice == 2  && randomNumber == 1){
      output.innerHTML += "You lose!";
    }

  }


  // Stop if input is not valid
  else{
    output.innerHTML = "Error, Please enter a valid option.";
  }


  }










