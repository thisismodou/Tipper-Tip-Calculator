function calculateTip() {
    let billTotal = document.getElementById('totalBill');
    let tipPercent = document.getElementById('tipPercent');
    let noOfPeople = document.getElementById('peopleTotal');

    let tipTotal = billTotal.value * (tipPercent.value / 100);
    let perPersonTip = tipTotal / noOfPeople.value;
    let newTotalPerPerson = (+billTotal.value + +tipTotal) / noOfPeople.value;

    document.getElementById('tipOutputPerPerson').textContent = '$' + perPersonTip.toFixed(2);
    document.getElementById('totalOutputPerPerson').textContent = '$' + newTotalPerPerson.toFixed(2);
}

window.onload = calculateTip();

let tipPlusBtn = document.getElementById('tipPlusBtn');
let tipMinusBtn = document.getElementById('tipMinusBtn');
let peoplePlusBtn = document.getElementById('peoplePlusBtn');
let peopleMinusBtn = document.getElementById('peopleMinusBtn');
let billInput = document.getElementById('totalBill');
let tipInput = document.getElementById('tipPercent');
let peopleInput = document.getElementById('peopleTotal');

billInput.autofocus = true;
peopleMinusBtn.disabled = true;

// Increase tip percentage
function tipIncrease() {
    tipInput.stepUp(1);
    if (tipInput.value >= 1) {
        tipMinusBtn.disabled = false;
    }
    if (tipInput.value >= 100) {
        tipPlusBtn.disabled = true;
    }

    calculateTip();
}

// Decrease tip percentage
function tipDecrease() {
    tipInput.stepDown(1);
    if (tipInput.value == 1) {
        tipMinusBtn.disabled = true;
    }
    if (tipInput.value <= 99) {
        tipPlusBtn.disabled = false;
    }

    calculateTip();
}

// Disable respective tip percentage button when at min or max number (min: 1, max:100)
function disableTipButtons() {
    if (tipInput.value <= 1) {
        tipMinusBtn.disabled = true;
    }else {
        tipMinusBtn.disabled = false;
    }
    if (tipInput.value >= 100) {
        tipPlusBtn.disabled = true;
    }else {
        tipPlusBtn.disabled = false;
    }
}

// Increase number of people
function peoplePlus() {
    peopleInput.stepUp(1);
    if (peopleInput.value >= 1) {
        peopleMinusBtn.disabled = false;
    }
    if (peopleInput.value >= 1000) {
        peoplePlusBtn.disabled = true;
    }

    calculateTip();
}

// Decrease number of people
function peopleMinus() {
    peopleInput.stepDown(1);
    if (peopleInput.value <= 1) {
        peopleMinusBtn.disabled = true;
    }
    if (tipInput.value <= 99) {
        peoplePlusBtn.disabled = false;
    }

    calculateTip();
}

// Disable respective number of people button when at min or max (min: 1, max: 1000)
function disablePeopleButtons() {
    if (peopleInput.value <= 1) {
        peopleMinusBtn.disabled = true;
    }else {
        peopleMinusBtn.disabled = false;
    }
    if (peopleInput.value >= 1000) {
        peoplePlusBtn.disabled = true;
    }else {
        peoplePlusBtn.disabled = false;
    }
}

billInput.addEventListener('input', calculateTip);
billInput.addEventListener('focusout', calculateTip);

tipPlusBtn.addEventListener('click', tipIncrease);
tipMinusBtn.addEventListener('click', tipDecrease);

peoplePlusBtn.addEventListener('click', peoplePlus);
peopleMinusBtn.addEventListener('click', peopleMinus);