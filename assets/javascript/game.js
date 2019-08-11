$(document).ready(function() {

	// ******* NUMBER ARRAYS *******
	// random computer variable array
	var target = [];
	for (var t = 19; t < 121; t++) {
		target.push(t);
	}
	// crystal numbers array
	var crystals = [];
	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}
	// console.log(crystals);
	// ******* GLOBAL VARIABLES *******
	// random variables selected by computer
	var target; // number to match
	var cVals = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalPoints = 0; // user's score
	var wins = 0;
  var losses = 0;
  
	// ******* FUNCTIONS *******

	// pick a random number
	function pickTarget(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		target = x;
		$("#target").html(target);
		console.log("Target number: " + target);

	} // END of pickTarget function

	// pick random numbers for crystals

	function pickCrystal(arr) {
		for (var y = 0; y < 4; y++){
			var a = arr[Math.floor(Math.random() * arr.length)];
			cVals.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + cVals);

	} // END of pickCrystal function

	function crystalValues(arr) {
		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {
		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {
		cVals = []; // clears crystal number values
		pickTarget(target);
		pickCrystal(crystals);
		crystalValues(cVals);
		totalPoints = 0;
		$("#points").html(totalPoints);
		alert(x);
	} // END of gameReset function
	// *** GAME SETTINGS AT START ***
	pickTarget(target); // random number to match
	pickCrystal(crystals); // array of random crystal values
	crystalValues(cVals);

		// crystal button functions
		$("#button-1").on("click", function() {
			totalPoints += c1;
			$("#points").html(totalPoints);
		});
		$("#button-2").on("click", function() {
			totalPoints += c2;
			$("#points").html(totalPoints);
		});
		$("#button-3").on("click", function() {
			totalPoints += c3;
			$("#points").html(totalPoints);
		});
		$("#button-4").on("click", function() {
			totalPoints += c4;
			$("#points").html(totalPoints);
		});
	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalPoints == target) {
			wins++;
			console.log(totalPoints);
			$("#points").html(totalPoints);
			$("#wins").html("Wins: " + wins);

			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}
		else if (totalPoints > target){

			losses++;
			$("#points").html(totalPoints);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); // end of script
