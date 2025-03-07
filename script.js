const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');


const elements = {
  billTotal: document.getElementById('billTotal'),
  tipPercentage: document.getElementById('tipPercentage'),
  calculateBtn: document.getElementById('calculateBtn'),
  result: document.getElementById('result')
};

//displays message to the screen
function displayResult(message){
  return elements.result.innerHTML = message;
};

//create event 
function initializeApp() {
  elements.calculateBtn.addEventListener('click', calculateTip);
}

//input validation test
function inputValidation(bill, tip) {
  if(isNaN(bill)|| isNaN(tip)) {
    displayResult("Please add valid inputs");
    return false;
  }
    return true;
};

//calculate tip
function calculateTipAmount(bill, tipPercent) {
 return bill * (tipPercent / 100);
};

//calculate total of bill and tip 
function calculateTotalAmount(bill, tip) {
return bill + tip;
};

//create function to calculate tip
function calculateTip() {
  //take the bill total
  const billTotal = parseFloat(billTotalInput.value);
  //take the tip percentage
  const tipPercentage = parseFloat(tipPercentageInput.value);

 if (!inputValidation(billTotal, tipPercentage)) return;

  //formulate the amount
  const tipTotal = calculateTipAmount(billTotal, tipPercentage);
  //Calculate the total overall
  const totalAmount = calculateTotalAmount(tipTotal, billTotal)

  const resultHTML = `
  <p>Tip Total: $${tipTotal.toFixed(2)}</p>
  <p>Tip Amount: $${totalAmount.toFixed(2)}</p>`;

  //display it to the screen
 displayResult(resultHTML);
};

initializeApp();