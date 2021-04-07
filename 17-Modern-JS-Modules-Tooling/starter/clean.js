const sc = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

const allow = {
  lisbon: 5,
  others: 7,
};

const checkLimits = function (city) {
  if (sc.length > 0) {
    const allowed = city === 'lisbon' ? allow.lisbon : allow.others;

    for (item of sc) {
      if (item.quantity > allowed) item.quantity = allowed;
    }
  }
};

checkLimits('lisbon');
console.log(sc);

const createDescription = function () {
  const first = sc[0];
  const p = first.product;
  const q = first.quantity;

  const description = `Order with ${q} ${p} ${
    sc.length > 1 ? ', etc...' : '.'
  }`;

  return description;
};
const description = createDescription();

console.log(description);
