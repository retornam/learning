// [1, 5, 10, 20, 50, 100]
// 623 (any currency, any amount) = 10

function returnNumberOfBills (n, currency) {
  // currency is array
  var numberOfBills = 0;
  var addingUpToN = 0;
  for (var i = currency.length-1; i >= 0; i--) {
    while (currency[i] < n) {
      if ((addingUpToN + currency[i]) <= n) {
        addingUpToN += currency[i];
        numberOfBills += 1;
      } else {
        break;
      }
    }
  }
  return numberOfBills;
}

console.log(returnNumberOfBills(623, [1, 5, 10, 20, 50, 100]));
