$(document).ready(function() {

	// target array
	var target = [];
	for (var t = 19; t < 121; t++) {
		target.push(t);
	}
	// crystal numbers array
	var crystals = [];
	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}

	var target; // number to match
	var cVals = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalPoints = 0; //point total
	var wins = 0;
  var losses = 0;
  

	// pick a target number
	function pickTarget(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		target = x;
		$("#target").html(target);
		console.log("Target number: " + target);

	} // END of pickTarget function

	// pick crystal values

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
  

	pickTarget(target); // target number to match
	pickCrystal(crystals); // crystal array
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
		// adds to win total
		if (totalPoints == target) {
			wins++;
			console.log(totalPoints);
			$("#points").html(totalPoints);
			$("#wins").html("Wins: " + wins);

			setTimeout(function() {gameReset("What magic do you possess???")},0);
		}
		else if (totalPoints > target){

			losses++;
			$("#points").html(totalPoints);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("You do not have the strength...")},0);
		}
	});

}); // end of script
