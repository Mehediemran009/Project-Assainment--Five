
// Budgets section 

document.getElementById('player-cost').addEventListener('click', function () {
    const getValue = getInputValue('player-budget');
    if (isNaN(getValue, true)) {
        alert('Select Every player Budget, Thank you ')
        return;
    }
    else {
        const totalPlayerCost = getValue * 5;
    
    setElementValue('Player-total-cost',totalPlayerCost)
    }
    
})

// Total Cost Secton 
document.getElementById('total-cost').addEventListener('click', function () {
    const totalPlayerCost = getElementValue('Player-total-cost');
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    const inTotalBudget = totalPlayerCost + managerCost + coachCost;
    
    if (isNaN(inTotalBudget, true)) {
        alert('Select Manager and Choch budget. Thank you');
        return;
    }
    else {
         setElementValue('in-Total-Cost',inTotalBudget)
    }
})