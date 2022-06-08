

function bankAccount(ownerName) {
    let nameButton = document.getElementById('nameBtn');
    
    let ownerN = nameButton.addEventListener('click', function() { 
     prompt('Please, enter your name');
     return
});

console.log(ownerN);

    let depositButton = document.getElementById('depositBtn');
    let depositAm = depositButton.addEventListener('click', function() {
      parseInt(prompt('How much money would you like to deposit?'));
      return
})

console.log(depositAm);

    let withdrawalButton = document.getElementById('withdrawalBtn');
    let withdraw = withdrawalButton.addEventListener('click', function() {
        parseInt(prompt('How much money would you like to withdraw?'));
        return;
})

console.log(withdraw);

    let balance = 0;
    function innerBankAction(action, sum) {
        if (action == 'deposit') {
            balance += sum;
        }
        if (action == 'withdrawal') {
            balance -= sum;
        }
        return 'Your balance is $' + balance;
    }
    return innerBankAction
}
    let bankAction = bankAccount();
    // let divCont = window.document.getElementById('container');

bankAction('deposit', depositAm);
bankAction('withdrawal', withdraw);


//     let owner = ownerName;
//     function withdrawal(withdrawalAmount){
//         balance -= withdrawalAmount;
//     }

//     function deposit(depositAmount) {
//         balance +=depositAmount;
//     }
    
//     return bankAccount();
// }



// => {
//     document.getElementById('Name').onclick = createClickCounter();
//     document.getElementById('button2').onclick = createClickCounter();
// });