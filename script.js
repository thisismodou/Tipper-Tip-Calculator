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

function disableTipButtons() {
    if (tipInput.value == 1) {
        tipMinusBtn.disabled = true;
    }else {
        tipMinusBtn.disabled = false;
    }
    if (tipInput.value == 100) {
        tipPlusBtn.disabled = true;
    }else {
        tipPlusBtn.disabled = false;
    }
}

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

function peopleMinus() {
    peopleInput.stepDown(1);
    if (peopleInput.value == 1) {
        peopleMinusBtn.disabled = true;
    }
    if (tipInput.value <= 99) {
        peoplePlusBtn.disabled = false;
    }

    calculateTip();
}

function disablePeopleButtons() {
    if (peopleInput.value == 1) {
        peopleMinusBtn.disabled = true;
    }else {
        peopleMinusBtn.disabled = false;
    }
    if (peopleInput.value == 1000) {
        peoplePlusBtn.disabled = true;
    }else {
        peoplePlusBtn.disabled = false;
    }
}

function resetTipToMin() {
    if (tipInput.value < 1) {
        tipInput.value = 1;
    }
}

function resetTiptoMax() {
    if (tipInput.value > 100) {
        tipInput.value = 100
    }
}

function resetPeopleToMin() {
    if (peopleInput.value < 1) {
        peopleInput.value = 1;
    }
}

function resetPeopleToMax() {
    if (peopleInput.value > 1000) {
        peopleInput.value = 1000;
    }
}

billInput.addEventListener('input', calculateTip);
tipPlusBtn.addEventListener('click', tipIncrease);
tipMinusBtn.addEventListener('click', tipDecrease);
tipInput.addEventListener('keyup', disableTipButtons);
peopleInput.addEventListener('keyup', disablePeopleButtons);
tipInput.addEventListener('focusout', calculateTip);
tipInput.addEventListener('input', calculateTip);
tipInput.addEventListener('focusout', resetTipToMin);
tipInput.addEventListener('focusout', resetTiptoMax);
tipInput.addEventListener('focusout', disableTipButtons);
billInput.addEventListener('focusout', calculateTip);
peopleInput.addEventListener('focusout', calculateTip);
peopleInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('focusout', resetPeopleToMin);
peopleInput.addEventListener('focusout', resetPeopleToMax);
peopleInput.addEventListener('focusout', disablePeopleButtons);
peoplePlusBtn.addEventListener('click', peoplePlus);
peopleMinusBtn.addEventListener('click', peopleMinus);