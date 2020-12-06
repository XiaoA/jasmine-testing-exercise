window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  const amountError = document.querySelector("#amount-error");
  const yearError = document.querySelector("#year-error");
  const rateError = document.querySelector("#rate-error");
  
  currentUIValuesObject = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }

  let amount = document.querySelector("#loan-amount").value;
  if (!(typeof amount === "number" || amount.length < 1)) {
    amountError.innerText = ("Value must be a positive number.");
    throw new TypeError("Value must be a positive number.");
  } else { amount };
  
  let years = document.querySelector("#loan-years").value;
  if (!(typeof years === "number" || years.length < 1)) {
    yearError.innerText = ("Value must be a positive number.");
    throw new TypeError("Value must be a positive number.");
  } else { years };
  
  let rate = document.querySelector("#loan-rate").value;
  if (!(typeof rate === "float" || rate.length < 1)) {
    rateError.innerText = ("Value must be a positive number.");
    throw new TypeError("Value must be a positive number.");
  } else { rate };

  return currentUIValuesObject;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = values.amount;

  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;

  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
      (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector("#monthly-payment");
  monthlyUI.innerText = `${monthly}`
}
