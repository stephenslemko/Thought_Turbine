function listPrompt() {
    var numInput1;
    var numInput2;
    var numInput3;

    var firstNum = prompt("Please enter first number", "7");
        if (firstNum == null || firstNum == "") {
            numInput1 = "Sorry I need a number.";
        }
        else {
            numInput1 = firstNum;
        }
    var secondNum = prompt("Please enter second number", "7");
        if (secondNum == null || secondNum == "") {
            numInput2 = "Sorry I need a number.";
        }
        else {
            numInput2 = secondNum;
        }
    var thirdNum = prompt("Please enter third number", "7");
        if (thirdNum == null || thirdNum == "") {
            numInput3 = "Sorry I need a number.";
        }
        else {
            numInput3 = thirdNum;
        }
    
    var middleNum = secondNum.toString();
    var redMidNum = middleNum.fontcolor("red");
    var redBoldMidNum = redMidNum.bold();

    document.getElementById("middleNumber").innerHTML = 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "The middle number of (" + numInput1 + "," + numInput2 +
    "," + numInput3 + ") is: " + redBoldMidNum;    
}

function gradePrompt() {
    var percentageInput;
    var letterGrade;

    var firstPercentage = prompt("Please enter a percentage from 0-100");
        if (firstPercentage == null || firstPercentage < 0 || firstPercentage > 100) {
            percentageInput = "Incorrect - not between 0-100";
        }
        else {
            percentageInput = firstPercentage;
        }
    if (percentageInput <= 49) {
        letterGrade = "F";
    }
    else if (percentageInput <= 64) {
        letterGrade = "D";
    }
    else if (percentageInput <= 79) {
        letterGrade = "C";
    }
    else if (percentageInput <= 89) {
        letterGrade = "B"
    }
    else {
        letterGrade ="A";
    }

    var letterGradeRed = letterGrade.fontcolor("red");
    var letterGradeRedBold = letterGradeRed.bold();

    document.getElementById("grade").innerHTML = 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "The letter grade for "
    + percentageInput + "% is: " + letterGradeRedBold;   
}

function sideHashTagPryamid() {
    var i;
    var j;
    var hashBlock = "#"
    var canvas = document.getElementById("pryamid");
    
    for (i=0; i < 6; ++i){
        for (j=0; j < i; ++j){
            canvas.append(hashBlock + " ");
        }
        canvas.appendChild(document.createElement("br"));
    }
    for (i=0; i < 4; ++i){
        for (j=0; j < (4 - i); ++j){
            canvas.append(hashBlock + " ");
        }
        canvas.appendChild(document.createElement("br"));
    }
}

function bangkok() {
    var limit = 125000;
    var initialSize = 100;
    var initialSize2 = 100;
    var percentage = .06;
    var timeTillDie = 0;
    var almostTimeTillDie = 0;

    while (initialSize <= limit) {
        initialSize += (initialSize * percentage)
        timeTillDie += 1;
    }
    while (initialSize2 <= (limit/2)) {
        initialSize2 += (initialSize2 * percentage)
        almostTimeTillDie += 1;
    }
    document.getElementById("bangkok").innerHTML = 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "Fully envelop Bangkok in MINUTES: " + timeTillDie
    + "<br/>" + 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    "Half envelop Bangkok in MINUTES: " + almostTimeTillDie;
}