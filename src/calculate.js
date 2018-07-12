const convertToFixedFloat = (value, decimals) => Number.parseFloat(value).toFixed(decimals || 2);
const deepCopyArray = array => JSON.parse(JSON.stringify(array));
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const distributeDues = (amountDue, paymentAmounts) => {
  const increment = 0.01;
  const newPaymentAmounts = paymentAmounts.map(payment => payment);
  const participantList = [...paymentAmounts.keys()];
  let due = amountDue;
  let participants = paymentAmounts.length;

  if (amountDue > participants) {
    const amountOverage = Math.floor(amountDue / participants);
    paymentAmounts.forEach(payment => payment + amountOverage);
    due -= amountOverage * paymentAmounts.length;
  }

  while (due > 0) {
    const roll = getRandomInt(participants);
    newPaymentAmounts[participantList[roll]] += increment;
    due -= increment;
    participantList.splice(roll, 1);
    participants -= 1;
  }
  return newPaymentAmounts;
};

const matchAmount = (amount, paymentAmounts) => {
  const paymentTotal = paymentAmounts.reduce((accumulator, payment) => accumulator + payment);
  let newPaymentAmounts = deepCopyArray(paymentAmounts);
  if (amount !== paymentTotal) {
    const amountDue = amount - paymentTotal;
    if (amountDue) {
      newPaymentAmounts = distributeDues(amountDue, newPaymentAmounts);
    }
  }
  return newPaymentAmounts;
};

const splitValue = (value, splits) => {
  if (splits) {
    return convertToFixedFloat(value, 2) / splits;
  }
  return value;
};

const splitPayment = (amount, splitRatio) => {
  const totalSplits = splitRatio.reduce((accumulator, split) => accumulator + split);
  const splitAmount = splitValue(amount, totalSplits);
  const paymentAmounts = splitRatio.map(split => convertToFixedFloat(split * splitAmount, 2));
  const matchedPaymentAmounts = matchAmount(amount, paymentAmounts);
  return matchedPaymentAmounts.map(payment => convertToFixedFloat(payment, 2));
};

export default { splitPayment };
