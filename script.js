const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
//const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

const elements = {
  billTotal: document.getElementById('billTotal'),
  tipPercentage: document.getElementById('tipPercentage'),
  calculateBtn: document.getElementById('calculateBtn'),
  result: document.getElementById('result')
};

//displays message to the screen
function display(message){
  return elements.result.innerHTML = message;
};

//create event for calculate btn
elements.calculateBtn.addEventListener('click', calculateTip);

//create function to calculate tip
function calculateTip() {
  //take the bill total
  const billTotal = parseFloat(billTotalInput.value);
  //take the tip percentage
  const tipPercentage = parseFloat(tipPercentageInput.value);

  if (isNaN(billTotal) || isNaN(tipPercentage)) {
    resultDiv.innerText = "Please enter valid numbers"
    return;
  };

  //formulate the amount
  const tipTotal = billTotal * (tipPercentage / 100);
  //Calculate the total overall
  const totalAmount = tipTotal + billTotal;

  const resultHTML = `
  <p>Tip Total: $${tipTotal.toFixed(2)}</p>
  <p>Tip Amount: $${totalAmount.toFixed(2)}</p>`;

  //display it to the screen
 display(resultHTML);
};