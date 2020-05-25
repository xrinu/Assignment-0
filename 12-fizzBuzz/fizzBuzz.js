function fizzBuzz(start, end) {
	var displayArr = new Array();

	for(var i=start; i<= end; i++)
	{
		//multiples of 3 and 5
		 if(i%3==0 && i%5==0)
		{
			displayArr.push("FizzBuzz");
		}
		//multipples of 3
		else if(i%3==0)
		{
			displayArr.push("Fizz");
		}
		//multiples of 5
		 else if(i%5==0)
		{
			displayArr.push("Buzz");
		}
		//to insert the number:
		else
		{
			displayArr.push(i);

		}
		
	}

	return displayArr;   
  
}

// Do not edit this line;
module.exports = fizzBuzz;