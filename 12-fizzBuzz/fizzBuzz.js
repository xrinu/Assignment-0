function fizzBuzz(start, end) {
	var displayArr = new Array();

	for(var i=start; i<= end; i++)
	{
		
		 if(i%3==0 && i%5==0)
		{
			displayArr.push("FizzBuzz");
		}
		else if(i%3==0)
		{
			displayArr.push("Fizz");
		}
		 else if(i%5==0)
		{
			displayArr.push("Buzz");
		}
		else
		{
			displayArr.push(i);

		}
		
	}

	return displayArr;   
  
}

// Do not edit this line;
module.exports = fizzBuzz;