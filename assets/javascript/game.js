$(document).ready(function() {  
	var random;
	var wins = 0;
	var losses = 0;
	var Blue = 0;
	var Orange = 0;
	var Purple = 0;
	var Red = 0;
	var currentScore = 0;
	var youWin = "You win!";
	var youLose = "You lose!";




//have to create function for tallying up score
var tally = function (){
	if (currentScore === random) {
		wins++;
		$("#message").text(youWin);
		$("#winsCounter").text(wins);
		reset ();
	} 
	else if (currentScore > random) {
		losses++;
		$("#message").text(youLose);
		$("#lossCounter").text(losses);
		reset ();
	} 
	else if (currentScore < random) {
		$("#message").text(" ");
	} 
};

// callbacks for click events
var callbackBlue = function () {
	currentScore = currentScore + Blue;
	$("#scoreCounter").text(currentScore);
	tally ();
	console.log("blue");
};

var callbackOrange = function () {
	currentScore = currentScore + Orange;
	$("#scoreCounter").text(currentScore);
	tally ();

};

var callbackPurple = function () {
	currentScore = currentScore + Purple;
	$("#scoreCounter").text(currentScore);
	tally ();

};

var callbackRed = function () {
	currentScore = currentScore + Red;
	$("#scoreCounter").text(currentScore);
	tally ();
};

//click events
$("#blue").on("click", callbackBlue);

$("#orange").on("click", callbackOrange);

$("#purple").on("click", callbackPurple);

$("#red").on("click", callbackRed);

//random number generator. 
	random = Math.floor(Math.random() * (102) + 19);
	$("#randomNumber").text(random);


	Blue = Math.floor(Math.random() * (12) +1);
	Orange = Math.floor(Math.random() * (12) +1);	
	Purple = Math.floor(Math.random() * (12) +1);
	Red = Math.floor(Math.random() * (12) +1);


var reset = function () {
	currentScore = 0;
	var random = Math.floor(Math.random() * (102) + 19);
	$("#randomNumber").text(random);
	Blue = Math.floor(Math.random() * (12) +1);
	Orange = Math.floor(Math.random() * (12) +1);	
	Purple = Math.floor(Math.random() * (12) +1);
	Red = Math.floor(Math.random() * (12) +1);
	$("#scoreCounter").text(currentScore);
	
};

});





