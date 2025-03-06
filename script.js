const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');


//create event for calculate btn
calculateBtn.addEventListener('click', calculateTip);

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

  //add it to the screen
  resultDiv.innerHTML = `
      <p>Tip Amount: $${tipTotal.toFixed(2)}</p>
      <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
};

//returns tip total
function calculateTip(billTotal, tipPercentage) {
  return billTotal * (tipPercentage / 100);
}