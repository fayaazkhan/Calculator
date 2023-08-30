let result = document.querySelector('#result'),
    m = 1,
    i;

//get input value here
function display(value) {
    result.value += value;
}

// equal function
function calcul() {
    var p = result.value;
    var q = eval(p);
    p == "" ? result.value = "" : result.value = q;
}

// reset display at zero(0)
function clears() {
    result.value = "";
}

//delete the last number
function back() {
    let exp = result.value;
    result.value = exp.substring(0, exp.length - 1);
}

//Math function 
function sqrt() {
    result.value = Math.sqrt(result.value);
}
function square() {
    result.value = result.value * result.value;
}
function expo() {
    result.value = result.value + "**";
}

//factorial function
function fact() {
    if (result.value === 0) { 
        result.value = 1; 
    } else if (result.value < 0) { 
        result.value = "NaN"; 
    } else {
        for (i = result.value; i > 0; i--) {
            m = m * i;
        }
        result.value = m;
    }
}

//changing sign +/- function
function changeSign() {

    if (result.value.charAt(0) === "-") {
        result.value = res.value.slice(1);
    } else {
        result.value = "-" + result.value;
    }
}