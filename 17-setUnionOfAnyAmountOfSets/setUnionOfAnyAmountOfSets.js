function setUnionOfAnyAmountOfSets(...args) {
	var fullSet = new Set();
   for(set of args)
   {
   	for (num of set)
   	{
   		fullSet.add(num);
   	}
   }
   return fullSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;