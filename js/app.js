function getInputValueById(inputId) {
    const inputField = parseFloat(document.getElementById(inputId).value);
    return inputField;
}

function setElementValueById(elementId, amount) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = amount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = getInputValueById('income-field');
    const foodField = getInputValueById('food-field');
    const rentField = getInputValueById('rent-field');
    const clothesField = getInputValueById('clothes-field');

    if (isNaN(incomeField) || isNaN(foodField) || isNaN(rentField) || isNaN(clothesField)) {
        alert('Input the valid number');
        return;
    }
    else if (incomeField < 0 || foodField < 0 || rentField < 0 || clothesField < 0) {
        alert('Input the positive number');
        return;
    }

    const totalExpense = foodField + rentField + clothesField;
    const balance = incomeField - totalExpense;

    if (incomeField < totalExpense) {
        alert('Expense is less than or equal to income');
        return;
    }

    setElementValueById('total-expense', totalExpense);
    setElementValueById('balance', balance);
})

document.getElementById('save').addEventListener('click', function () {
    const income = getInputValueById('income-field');
    const preBalance = parseFloat(document.getElementById('balance').innerText);
    const save = getInputValueById('saving-field');

    if (isNaN(save)) {
        alert('Input the Valid Number');
        return;
    }
    else if (save < 0) {
        alert('Input the Positive Number');
        return;
    }
    else if (save > 100) {
        alert('Not possible to save the money more than 100%');
        return;
    }

    const saveAmount = income * (save / 100);

    if (saveAmount > preBalance) {
        alert('saving amount is less than balance');
        return;
    }

    const remainingAmount = preBalance - saveAmount;
    setElementValueById('saving-amount', saveAmount);
    setElementValueById('current-balance', remainingAmount);
})