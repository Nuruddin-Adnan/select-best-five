// ############# common utilities function start #############

// get the input value by id
function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    return inputValue = parseFloat(input.value);
}

// get the element value by id
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    return elementValue = parseFloat(element.innerText);
}

// set the element  value by id
function setElementValueById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

// ############# End of common utilities function #############



// player select
document.querySelectorAll('.btn-player-select').forEach(btnPlayerSelect => {
    btnPlayerSelect.addEventListener('click', function (event) {
        const playerName = event.target.value;
        const playerLists = document.getElementById('selected-player-list');

        if (playerLists.children.length === 5) {
            alert('you can not add more than 5 player');
            return;
        } else {
            const listItem = document.createElement('li');
            listItem.innerText = playerName
            playerLists.appendChild(listItem);
            event.target.disabled = true;
        }
    })
});



// total player expense calculation
document.getElementById('player-expense-btn').addEventListener('click', function () {
    const perPlayerExpense = getInputValueById('per-player-field');
    const totalPlayerNumber = document.getElementById('selected-player-list').children.length;

    // validation of the player expense input value
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('please ente a valid value');
        return;
    } else {
        const totalPlayerExpense = perPlayerExpense * totalPlayerNumber;

        // update the new expense in HMLT
        setElementValueById('total-player-expense', totalPlayerExpense);
    }
})


// total match expense calculation
document.getElementById('calculate-total').addEventListener('click', function () {
    const totalPlayerExpense = getElementValueById('total-player-expense');
    const managerExpense = getInputValueById('manager-field');
    const coachExpense = getInputValueById('coach-field');

    if (totalPlayerExpense < 0) {
        alert('please calculate player expense first');
        return;
    } else if ((isNaN(managerExpense) || managerExpense < 0) || (isNaN(coachExpense) || coachExpense < 0)) {
        alert('please enter a valid value');
        return;
    } else {
        totalMatchExpense = totalPlayerExpense + managerExpense + coachExpense;
        setElementValueById('total-match-expense', totalMatchExpense);
    }
})