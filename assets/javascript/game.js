var total = 0;
var previous = 0;
var wins = 0;
var losses = 0;


var resetAndStart = function() {

    $(".crystals").empty();

randomNum = Math.floor(Math.random() * 100 ) + 19;


$("#result").html('Random Number: ' + randomNum);
$("#total").html('Your total score is: ' + total);

for(var i = 0; i < 4; i++)  {

    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });

    $(".crystals").append(crystal); 

    }
}

resetAndStart();

$("#losses").html('Losses: ' + losses);
$("#wins").html('Wins: ' + wins);



$(document).on('click', ".crystal", function() {

    $("#message").empty();

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    
    $("#total").html('Your total score is: ' + previous);

    if(previous > randomNum){
        losses++;
        $("#losses").html('Losses: ' + losses );
        $("#message").html('You Lost!');
        previous =0;
        resetAndStart();   
    }
    else if(previous === randomNum){
        wins++;
        $("#wins").html('Wins: ' + wins );
        $("#message").html('You Won!');        
        previous =0;
        resetAndStart();
    }
});







// There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
//The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.