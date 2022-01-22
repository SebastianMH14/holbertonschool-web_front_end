const stock = {
  mackbook: 2,
  iphone: 4
};

function processPayment (itemName) {
  stock.delete(itemName);
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError (itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

function processOrder (itemName = '', callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  if (itemName.toLowerCase() in stock) {
    if (stock[itemName] === 0) {
      callbackError(itemName);
    } else {
      callbackPayment(itemName.toLowerCase());
    }
  } else {
    callbackError(itemName.toLowerCase());
  }
}

const item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(item, processPayment, processError);
