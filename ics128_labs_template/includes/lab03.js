var sentence = getInputString();
var letter = getLetterFromString();
letterCount(sentence, letter);
var month = getPayRollMonth();
var year = getPayRollYear();
var wage = getPayRollWage();
getWeekDays(month, year);
outputPayRoll(month, year, wage);
document.getElementById("future").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe future value is: " + calcFutureValue(10, 4, 5);
document.getElementById("future2").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe future value is: " + calcFutureValue(102.65999, 4, 5);
calcFutureValue(0, 4, 5);

//getInputString - take input from user (via prompt) as a string, turn to bold and print to html.

function getInputString() {
	var wordsToScan ="";
	var titleToStart = "The string is: ";
    var boldTitleToStart = titleToStart.bold();

	try {
		var inputString = prompt("Please give me a sentence to read", "your wisdom here");
		wordsToScan = inputString;
	}
   	catch (e) {
		wordsToScan = "Keep your secrets";
	}
	document.getElementById("stringToCount").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + boldTitleToStart + wordsToScan;
	return wordsToScan;
}

//getLetterFromString - take input from user (via prompt) as character

function getLetterFromString() {
	var iSpy;
	try {
		var letterOfInterest = prompt("Give me a letter from that sentence", "s");
		iSpy = letterOfInterest;
	}
	catch (e) {
		iSpy = "s";
	}
	return iSpy;
}

//letterCount - pass the string and letter from previos prompts into letterCount, perform linear
//search of string counting each match of character, return that count as int

function letterCount (String, char) {
	var kobe = 0;
	var wordsList = String.toUpperCase();
	var letter = char.toUpperCase();
	if (letter.length > 1) {
		letter = letter.charAt(0);
	}

	for (var i=0; i<wordsList.length; ++i) {
		if (wordsList.charAt(i) == letter) {
			kobe += 1;
		}
	}
	document.getElementById("countedIt").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe letter '" + char 
	+ "' appears " + kobe + " times.";
	return kobe;
}

//getPayRollMonth - take input from user (as prompt) input must be an int from 1-12 
// representing months, decrement that number by one (array index start at 0) then return
// the monthList array element which matches, array is populated with month name strings.

function getPayRollMonth() {
	try {
		var monthInput = prompt("Which month did employee work 1-12", "12");
		if (monthInput < 0 || monthInput > 12) {
			throw new Error("Must be between 1 and 12");
		}
		monthInput = monthInput - 1;
	}
	catch (e) {
		document.getElementById("payRollMonth").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMonth: I need a number between 1 and 12";
	}
	var monthList = ["January", "February", "March", "April", "May", "June"
	, "July", "August", "September", "October", "November"
	, "December"];
	document.getElementById("payRollMonth").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMonth: " + monthList[monthInput];
	return monthInput;
}

//getPayRollYear - take input from user (as a prompt) input must be a int representing year

function getPayRollYear() {
	try {
		var yearInput = prompt("What year did employee work in", "2018");
	}
	catch (e) {
		yearInput = "1987";
	}
	document.getElementById("payRollYear").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYear: " + yearInput;
	return yearInput;
}

//getWeekDays - take the month and year from previous prompts, create Date object of those
//inputs, then create a second date object incrementing month by one. Iterate through each day
//checking that it has a value excluding 0&6 count each match and return that count.

function getWeekDays(month, year) {
	var dayCount = 0;
	var startDate = new Date(year, month, 1);
	var endDate = new Date(year, month+1, 1);
	while (startDate < endDate) {
		var workedDay = startDate.getDay();
		if (workedDay != 0 && workedDay != 6) {
			dayCount++;
		}
		startDate.setDate(startDate.getDate()+1); 
	}
	document.getElementById("payRollWeekdays").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWeekdays: " + dayCount;
	return dayCount;
}

//getPayRollWage - take input from user (as a prompt) wage must be an int amount
//output that amount to page

function getPayRollWage() {
	try {
		var wageInput = prompt("What was the employees hourly wage", "50");
		var wageInputFloat = parseFloat(wageInput);
	}
	catch (e) {
		wageInput = 15;
	}
	document.getElementById("payRollWage").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSalary: $" + wageInputFloat.toFixed(2);
	return wageInputFloat;
}

//outputPayRoll - take month, year, and wage inputs from previous prompts. For each day worked
//multiply by 7.5 (hours worked per day) then multiply by wage amount. Output this amount to page

function outputPayRoll(month, year, wage) {
	var daysWorked = getWeekDays(month, year);
	var salary = (daysWorked * 7.5) * wage;
	var salaryFloat = parseFloat(salary);
	document.getElementById("payRollSalary").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPay: $" + salaryFloat.toFixed(2);
	return salary;			  	
}

//calcFutureValue - input 3 integer amounts (for example input is hardcoded) divide the
//percentage rate by 12 then 100 to obtain decimal value. Multiply years by 12 to obtain month
//amount. Iterate through each month multiplying the principal by interest accrued and adding
//to principal to obtain total of fund.
//
//Added more specific error message on catch which outputs directly to page on 3rd example
//where a value of 0 is intentionally passed in to function.

function calcFutureValue(principal, rate, years) {
	try{
		if (principal <= 0) {
			throw "ERROR: Principal must be more than 0";
		}
		if (rate <= 0) {
			throw "ERROR: Rate must be more than 0";
		}
		if (years <= 0) {
			throw "ERROR: Years must be more than 0";
		}
		var monthlyRate = (rate/12)/100;
		var months = years * 12;
		var futureValue = 0;
		for (var i = 0; i < months; ++i) {
			futureValue = (futureValue + principal) * (monthlyRate + 1);
		}
		futureValue = parseFloat(futureValue);
		futureValue = futureValue.toFixed(2);
		return futureValue;		
	}
	catch (e) {
		document.getElementById("errorSpot").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspERROR: Principal must be more than 0";
	}	
}
 


