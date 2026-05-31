let prevNumber = null;
let currNumberString = "";
let lastAction = null;
// const textDisplay = document.getElementById("calcNumber");

function insertNumber(number) {
    if (lastAction != "equals"){
        currNumberString += number;
    } else {
        currNumberString = number;
        lastAction = "newNumberStart";
        prevNumber = null;
    }

    displayCurrNumberString()

}

// function adddot()


function add() {
    if (prevNumber != null) {
        currNumberString = parseFloat(currNumberString) + prevNumber;
        prevNumber = null
        displayCurrNumberString()
    } else {
        prevNumber = parseFloat(currNumberString);
        currNumberString = ""
        displayCurrNumberString()
    }
        lastAction = "add"
}

function subtract() {
    if (prevNumber != null) {
        currNumberString = (prevNumber - parseInt(currNumberString)) ;
        prevNumber = null
        lastAction = "subtract"

    } else {
        if (currNumberString != "") {
        prevNumber = parseFloat(currNumberString);
        currNumberString = ""
        lastAction = "subtract"

        } else {
        currNumberString = "-";

        }

    }
        displayCurrNumberString()
}

function multiply() {
    if (prevNumber != null) {
        currNumberString = parseFloat(currNumberString) * prevNumber;
        prevNumber = null
        displayCurrNumberString()
    } else {
        prevNumber = parseFloat(currNumberString);
        currNumberString = ""
        displayCurrNumberString()
    }
        lastAction = "multiply"
}

function divide() {
        if (prevNumber != null) {
        currNumberString =  prevNumber / parseFloat(currNumberString) ;
        prevNumber = null
        displayCurrNumberString()
    } else {
        prevNumber = parseFloat(currNumberString);
        currNumberString = ""
        displayCurrNumberString()
    }
        lastAction = "divide"
}

function equals() {
    console.log("prevNumber " + String(prevNumber))
    console.log("currNumberString " + currNumberString)
    console.log("lastAction " + String(lastAction))
    if (prevNumber != null) {
        if (lastAction == "add") {
            add(); 
            lastAction = "equals";
        } else if (lastAction == "subtract") {
            subtract();
            lastAction = "equals"
        } else if (lastAction == "multiply") {
            multiply();
            lastAction = "equals"
        } else if (lastAction == "divide") {
            divide();
            lastAction = "equals"
        }
    }
}

function displayCurrNumberString() {
    document.getElementById("calcNumber").innerHTML = currNumberString;

}

function displaySpecificString(numberString) {
    document.getElementById("calcNumber").innerHTML = numberString;

}