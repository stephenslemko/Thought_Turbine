/* When user clicks the Remove Char button the two input text values are taken. An 
array is made from the string input box. Then each element of that array is turned 
into it's own arrat. Each secondary element is visited and compared to the inputKey 
value. If the input key is the same as the letter, replace letter with blank string 
and increase count. Reassemble the arrays. Then print the original string, key, and 
edited string to screen. */

const removeCharBtn = document.getElementById("removeChar");
removeCharBtn.addEventListener("click", function(){stringOperation()}, false);

function takeString() {
    const userString = document.getElementById("inputString").value;
    return userString;
}
function takeChar() {
    const userChar = document.getElementById("inputLetterKey").value;
    return userChar;
}

function stringOperation() {
    const userInputString = takeString();
    const userInputChar = takeChar();
    const stringHeading = "The string is: ";
    const keyHeading = "The key is: ";
    const resultHeading = "The new string is: ";
    let stringArray = userInputString.split(" ");
    let count = 0;
    for (var i = 0; i < stringArray.length; ++i) {
        var eachStringArrayElement = stringArray[i];
        var elementArray = Array.from(eachStringArrayElement);
        for (var j = 0; j < elementArray.length; ++j) {
            if (userInputChar == elementArray[j] || 
                userInputChar.toUpperCase() == elementArray[j]) {
                elementArray[j] = "";
                ++count;
            }
        }
        stringArray[i] = elementArray.join("");
    }
    document.getElementById("stringInput").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                        ${stringHeading.bold()} 
                                                        ${userInputString}`;
    document.getElementById("keyInput").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                     ${keyHeading.bold()} 
                                                     ${userInputChar}`;
    document.getElementById("letterCountResult").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                              ${"The letter"} 
                                                              ${userInputChar} 
                                                              ${"occurs"} 
                                                              ${count} 
                                                              ${"times in the array"}`;
    document.getElementById("removedLetterString").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                                ${resultHeading.bold()} 
                                                                ${stringArray.join(" ")}`;
}

drawTwoCards();
const shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", function(){drawTwoCards()}, false);

function drawTwoCards() {
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const firstCardHeading = "Card 1 is: ";
    const secondCardHeading = "Card 2 is: ";
    const cardOneSuit = suits[getRandomSuit(0, 3)];
    const cardOneValue = cardValues[getRandomCardValue(0, 12)];
    const cardTwoSuit = suits[getRandomSuit(0, 3)];
    const cardTwoValue = cardValues[getRandomCardValue(0, 12)];
    
    function getRandomSuit(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomCardValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.getElementById("firstCardDraw").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                          ${firstCardHeading.bold()}
                                                          ${cardOneValue}
                                                          ${" of "}
                                                          ${cardOneSuit}`;
    document.getElementById("secondCardDraw").innerHTML = `${"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"}
                                                          ${secondCardHeading.bold()}
                                                          ${cardTwoValue}
                                                          ${" of "}
                                                          ${cardTwoSuit}`;
}

const insertRow = document.getElementById("myButton");
insertRow.addEventListener("click", function(){addNewRow()}, false);

function addNewRow() {
    document.getElementById("sampleTable").innerHTML += `${"<td>New Cell1</td>"}
                                                      ${"<td>New Cell2</td>"}`;
}

