	var length = 0;
	var currentVal = 0;
	var int1 = 0; 
	var int2 = 0;
	var operation = '';
	var pendingOperation='0';
	var total = 0;
	var enterPressed = 0;
	var keyVal = '';
	var keyPress = '';
	var activate = true;
	
	
	
	$( document ).ready(function() { 
		numpadLessener()
		operatorLessener()
		cancelLessener()
		deleteLessener()
		keyLessener()
		
	});
	
	
	function numActivate(){
		if (length <= 9) {
			activate = true
		}else {
			activate = false
		}
	}	
	
	function numpadLessener(){
		
		$('.numpad').mouseup(function (e) {
			
			if (length < 10) {
				var inputbox = $("#display");
				currentVal = (inputbox.val()).toString() + e.target.innerHTML;
				press =  e.target.innerHTML
				if (enterPressed == 1) {
						console.log("Done 1st operation, total =" + total)
						console.log("Entered operation, pending operator =" + pendingOperation)
						console.log('int1 =' + int1)
						console.log('int2 =' + int2)
						if (total == 0) {
							console.log('int 2 is equal to total cause total is 0')
							total = int1
						}
					inputbox.val(press)
					console.log('total is ' + total)
					enterPressed = 0
				}

				if (enterPressed == 0){
					console.log('welcome')
					console.log('enterPressed = ' + enterPressed)
					inputbox.val(currentVal)
					length = currentVal.length
					currenval = 0
				}
			}
		}) 
		
	}
	
	function enterOperation(){
		if (total == 0){
			return console.log('Stop cause no operation')
			}
		if (total > 0) {
			if (currentVal <= 0) {
				currentVal = 0
			}
			int1 = total
			int2 = currentVal
			console.log('current operation =' + pendingOperation)
			console.log('ENTER and total is greater than 0')
			console.log('currentVal =' + currentVal)
			console.log('int1 =' +int1)
			console.log('int2 =' +int2)
			console.log('total is =' +total)
			executeOperation()
			$('#operate').text(total)
			$('#display').val('')
			currentVal = 0
			pendingOperation = 0
			console.log(currentVal)
			enterPressed = 1
			length = 0
			return console.log('You Enter twice')
		}
		if (total < 0) {
			//return console.log('negative total')
		
			if (currentVal <= 0) {
				currentVal = 0
			}
			int1 = total
			int2 = currentVal
			console.log('current operation =' + pendingOperation)
			console.log('ENTER and total is greater than 0')
			console.log('currentVal =' + currentVal)
			console.log('int1 =' +int1)
			console.log('int2 =' +int2)
			console.log('total is =' +total)
			executeOperation()
			console.log('total is =' +total)		
			$('#operate').text(total)
			$('#display').val('')
			currentVal = 0
			pendingOperation = 0
			console.log(currentVal)
			enterPressed = 1
			length = 0
			return console.log('You Enter twice')
		}
	}
	
	function execOperation(){
		if (total == 0){
			console.log('pre = current operation and total is 0')
			int2 = (total + currentVal)
			executeOperation()
			enterPressed = 1
			int1 = 0
			$("#display").val('')
			currentVal = 0
			pendingOperation = operation
			console.log('total =' + total)
			length = 0
				if (total == 0) {	
					return $('#operate').text(pendingOperation)
							}
				if (total < 0) {
					return $('#operate').text(total + pendingOperation)
				}		
				else {
					return $('#operate').text(total + pendingOperation)
							}
		}
		
		if (total > 0) {
			console.log('pre = current operation and total greater 0')
			if (currentVal > 0) {
				console.log('You have Input')
				console.log('Your currentVal is ' + currentVal)
				int1 = total
				int2 = currentVal
				executeOperation()
				pendingOperation = operation
				console.log("total is "+ total)
				console.log('int1 is '+int1)
				console.log('int2 is '+int2)
				console.log('pending operatio is ' + pendingOperation)
				$("#display").val('')
				currentVal = 0
				length = 0
				console.log('currentVal is ' + currentVal)
				if (total > 0) {	
						return $('#operate').text(total + pendingOperation)
				}
				if (total < 0) {
					return $('#operate').text(total + pendingOperation)
				}		
				else {
					return $('#operate').text(pendingOperation)
				}

			} else {
				console.log('you did not input')
				console.log('currentVal is ' + currentVal)
				pendingOperation = operation
				length = 0
				if (total > 0) {	
					return $('#operate').text(total + pendingOperation)
				}
				if (total < 0) {
					return $('#operate').text(total + pendingOperation)
					}
				else {
					return $('#operate').text(pendingOperation)
					}
	
			}
		}
			
		if (total < 0) {
			console.log('pre = current operation and total less than 0')
			if (currentVal > 0) {
				console.log('You have Input')
				console.log('Your currentVal is ' + currentVal)
				int1 = total
				int2 = currentVal
				executeOperation()
				pendingOperation = operation
				console.log("total is "+ total)
				console.log('int1 is '+int1)
				console.log('int2 is '+int2)
				console.log('pending operatio is ' + pendingOperation)
				$("#display").val('')
				currentVal = 0
				length = 0
				console.log('currentVal is ' + currentVal)
					if (total > 0) {	
						$('#operate').text(total + pendingOperation)
					}
					if (total < 0) {
						$('#operate').text(total + pendingOperation)
					}		
					else {
						$('#operate').text(pendingOperation)
					}

			}
			else {
				console.log('you did not input')
				console.log('currentVal is ' + currentVal)
				pendingOperation = operation
				length = 0
				if (total > 0) {	
					return $('#operate').text(total + pendingOperation)
				}
				var operateText = total < 0 ? (total + pendingOperation) : pendingOperation
				$('#operate').text(operateText)
			}
		}
	}
	
	
	
	function operatorLessener(){
		int1 = parseInt(int1)
		currentVal = parseInt(currentVal)
		
		$('.operator').click(function (e) {
			var operation = e.target.innerHTML
			var operates = $('#operate')
			total = parseInt(total)
			int1 = parseInt(int1)
			int2 = parseInt(int2)
			currentVal = $("#display").val(); 
			console.log(int2)
			console.log(operation)
			if (operation == 'ENTER') {
				enterOperation();
			}
			else if (operation == '-' || operation == '+' || operation == '/' || operation == 'X'){
				console.log('operator input')
				int1 = parseInt(int1)
				int2 = parseInt(int2)
				total = parseInt (total)
				console.log('sdfsdf ' + total)		
				console.log('dddddddddddddd ' + pendingOperation)
				
				if (pendingOperation == '-' || pendingOperation == '+' || pendingOperation == '/' || pendingOperation == 'X'){
					execOperation()
				} else {
					console.log('You first operation')
				console.log('currentVal ' + currentVal)
				int1 = currentVal
				pendingOperation = operation
				$('#display').val('')
				currentVal = 0
				console.log("total is "+ total)
				console.log('int1 is '+int1)
				console.log('int2 is '+int2)
				console.log('pending operatio is ' + pendingOperation)
				enterPressed =1
				length = 0
				if (total == 0) {	
					$('#operate').text(pendingOperation)
				}
				else {
					$('#operate').text(total + pendingOperation)
				}
					if (total > 0) {
						console.log('New operation and pressed enter')
						int2 = total
						pendingOperation = operation
						$("#display").val('')
						var operateText = total < 0 ? (total + pendingOperation) : pendingOperation
						$('#operate').text(operateText)
					}					
				}					  
			}	else {
				console.log('You first operation')
				console.log('currentVal ' + currentVal)
				int1 = currentVal
				int2 = 0
				pendingOperation = operation
				$('#display').val('')
				currentVal = 0
				console.log("total is "+ total)
				console.log('int1 is '+int1)
				console.log('int2 is '+int2)
				console.log('pending operatio is ' + pendingOperation)
				enterPressed =1
				length = 0
				var operateText = total < 0 ? (total + pendingOperation) : pendingOperation
				$('#operate').text(operateText)
			}			
			
		}) 
	}
	
	
	function executeOperation(){
		int1 = parseInt(int1)
		int2 = parseInt(int2)
		total = parseInt (total)
		if(pendingOperation == '+'){
			$("#display").val(int1 + int2)
		  total = (int1 + int2)
		  enterPressed = 1
		}
		
		if(pendingOperation == '-'){
			$("#display").val(int1 - int2)
			 total = (int1 - int2)
			enterPressed = 1
		}
		
		if(pendingOperation == 'X'){
			$("#display").val(int1 * int2)
			 total = (int1 * int2)
			enterPressed = 1
		}
		
		if(pendingOperation == '/'){
			$("#display").val(int1 / int2)
			 total = (int1 / int2)
			enterPressed = 1
		}
		int1 = $("#display").val()
		length = 0
		console.log(pendingOperation)
		
		
		
		
		
	}
	
	function cancelLessener() {
		$('.cancel').click(function () {
		input = $('#display')
		strng = (input.val()).slice(0, -1)
		console.log(strng)
		input.val(strng)
		length = 0
		}
		)
	}
	
	function deleteLessener(){ 
	$('.delete').click(function () {
	$('#display').val('')
	 $('#operate').text('0')
	 currentVal = 0;
	 int1 = 0; 
	 int2 = 0;
	 operation = '';
	 pendingOperation='';
	 total = 0;
	 enterPressed = 0;
	 keyVal = '';
	 keyPress = '';
	 length = 0
	})
	}
	
	function keyLessener() {
				
		$(document).keyup(function(e) {
		if (e.keyCode == 97) {	
			$('.1').mouseup();	   	
       }
	   if (e.keyCode == 98) {	
			$('.2').mouseup();	   	
       }
	   if (e.keyCode == 99) {	
			$('.3').mouseup();	   	
       }
	   if (e.keyCode == 100) {	
			$('.4').mouseup();	   	
       }
	   if (e.keyCode == 101) {	
			$('.5').mouseup();	   	
       }
	   if (e.keyCode == 102) {	
			$('.6').mouseup();	   	
       }
	   if (e.keyCode == 103) {	
			$('.7').mouseup();	   	
       }
	   if (e.keyCode == 104) {	
			$('.8').mouseup();	   	
       }
	   if (e.keyCode == 105) {	
			$('.9').mouseup();	   	
       }
	   if (e.keyCode == 96) {	
			$('.0').mouseup();	   	
       }
	   if (e.keyCode == 111) {	
			$('.divide').click();	   	
       }
	   if (e.keyCode == 106) {	
			$('.multiply').click();	   	
       }
	   if (e.keyCode == 107) {	
			$('.addition').click();	   	
       }
	   if (e.keyCode == 109) {	
			$('.subtract').click();	   	
       }
	   if (e.keyCode == 110) {	
			$('.dot').click();	   	
       }
	   if (e.keyCode == 13) {	
				e.keyCode == 0
	  		return $('.equals').click();
			
       }
	   if (e.keyCode == 8 ) {	
			$('.cancel').click();	   	
       }
	   if (e.keyCode == 46) {	
			$('.delete').click();	   	
       }
	   
	    
	});
	}
	
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	