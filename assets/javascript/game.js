//Set up 4 crystals to click on
//set up score counter - will be between 19-120
//set up random number genaator for numbers between 1-12
// setup click function for the 
// Setup reset function to change the score counter and crystal #s



//Set up variables
var win = 0;
var lose = 0;
var currentScore = 0;
var targetScore = 0; // This is the score they need to match

// assign random numbers to each crystal from 1-12
var blue = (Math.floor(Math.random() * 12) + 1);
var clear = (Math.floor(Math.random() * 12) + 1);
var yellow = (Math.floor(Math.random() * 12) + 1);
var green = (Math.floor(Math.random() * 12) + 1);

// Set up target score from 19-120
targetScore = (Math.floor(Math.random() * 102) + 19);

function scoreUpdate() {
    $("#total-score").text(currentScore); // update the total score
    $("#target-score").text(targetScore); // updates the target score

    $("#win").text("Wins: " + win);
    $("#lose").text("Lose: " + lose);
};
//Then run the function to update the target score
scoreUpdate();

//This is a function that will reset the game when 
function reset() {
    //clear current score back to 0
    currentScore = 0;

    //Set up new crystal numbers
    blue = (Math.floor(Math.random() * 12) + 1);
    clear = (Math.floor(Math.random() * 12) + 1);
    yellow = (Math.floor(Math.random() * 12) + 1);
    green = (Math.floor(Math.random() * 12) + 1);

    // Set up new target score
    targetScore = (Math.floor(Math.random() * 102) + 19);

    //Then update the scores
    scoreUpdate();
};




//They win if they match targetScore === currentScore
//They lose if they go over winScore; then reset
function outcome() {
    if (currentScore === targetScore){// If they win
        //Alert that they won, increment the win score and reset the numbers
        alert("You won! Play again?"); 
        win++;
        reset();

        
    } else if (currentScore > targetScore){// if they lose
        //Alert they lose, increment the lose score and reset the numbers
        alert("You lost! Would you like to try again?");
        lose++;
        reset();
    }
};

//-----------------------------------------------------------------------------
//set the click functions for the crystals
//-----------------------------------------------------------------------------
//When blue crystal is clicked
$("#blue").click(function(){
    currentScore += blue; //add the score
    scoreUpdate(); //Run the score update
    outcome(); // Check if they won or went over the score
});

//When clear crystal is clicked
$("#clear").click(function(){
    currentScore += clear; //add the score
    scoreUpdate(); //Run the score update
    outcome(); // Check if they won or went over the score
});

//When green crystal is clicked
$("#green").click(function(){
    currentScore += green; //add the score
    scoreUpdate(); //Run the score update
    outcome(); // Check if they won or went over the score
});

//When yellow crystal is clicked
$("#yellow").click(function(){
    currentScore += yellow; //add the score
    scoreUpdate(); //Run the score update
    outcome(); // Check if they won or went over the score
});
