function convertMoney(){
	var sixteens = 0;
	var eights = 0;
	var fours = 0;
	var twos = 0;
	var ones = 0;
	var remaining = 0;
	var remainder = 0;
	
	var userInput = document.getElementById("amount").value;
	
	if(userInput < 20 || userInput > 100 || !userInput || isNaN(userInput))
		alert('Invalid entry!\n\nPlease enter a number from 20 to 100!');
		
	if(userInput >= 16 && userInput <= 100){
		sixteens = userInput/16;
		remaining = userInput%16;
		remainder = remaining;
		
		if(remainder >= 8){
			eights = remainder/8;
			remaining = remainder%8;
			remainder = remaining;
		}
		
		if(remainder >= 4){
			fours = remainder/4;
			remainder = remainder%4;
		}
		
		if(remainder >= 2){
			twos = remainder/2;
			remainder = remainder%2;
		}
		
		if(remainder == 1){
			ones = remainder;
		}
	}
	
	document.getElementById("coins-display").innerHTML = 'You asked to convert: ' + '<span id="input-number">' + userInput + '</span>' + '<br><br>'
		+ 'Here is the result in coins: ' + '<br>'
		+ 'Sixteens: ' +parseInt(sixteens)+ '<br>'
		+ 'Eights: ' +parseInt(eights)+ '<br>'
		+ 'Fours: ' +parseInt(fours)+ '<br>'
		+ 'Twos: ' +parseInt(twos)+ '<br>'
		+ 'Ones: ' +parseInt(ones)+ '<br><br>'
		+ 'Hope you liked using this converter. &nbsp;Please try again soon.';
	
		
}