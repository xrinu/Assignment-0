function productOfAnyAmountOfNumbers(...args) {
  var product=1;
  for(var i=0; i< args.length; i++)
  {
  	product = product * args[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;