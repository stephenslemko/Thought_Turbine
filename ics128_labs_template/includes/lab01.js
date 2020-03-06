alert ("Hello World!");

function helloPrompt() {
    document.getElementById("helloAgain").textContent = "Hello World Again!";
}

function namePrompt() {
    var nameInput;
    var textFill = prompt("Please enter your name:", "My Dude");
        if (textFill == null || textFill == "") {
            nameInput = "Keep your secrets.";
        }
        else {
            nameInput = "Hello " + textFill + "! Nice to meet you";
        }
        document.getElementById("hello").textContent = nameInput;
}

function taxCalc() {
    var inputAmount;
    var textPrompt1 = prompt("Please enter amount", "0");
        if (textPrompt1 == null || textPrompt1 == "") {
            inputAmount = "0";
        }
        else {
            inputAmount = "$" + parseInt(textPrompt1);
        }
        document.getElementById("AmountIn").textContent = inputAmount;

    var inputTaxRate;
    var textPrompt2 = prompt("Please enter a tax rate", "0");
        if (textPrompt2 == null || textPrompt2 == "") {
            inputTaxRate = "0";
        }
        else {
            inputTaxRate = parseInt(textPrompt2) + "%";
        }
        document.getElementById("TaxRate").textContent = inputTaxRate;

    var calculatedAmount = parseFloat(parseInt(textPrompt1) * (parseInt(textPrompt2) / 100) + parseInt(textPrompt1));
    var finalAmount = calculatedAmount.toFixed(2);
    document.getElementById("TotalAmount").textContent = "$" + finalAmount;
}