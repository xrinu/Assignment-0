function sumOfMinimumAndMaximum(nums) {
  var sum=0;
  var min = nums[0];
  var max = nums[0];
  
  
  for(var i =0; i <nums.length; i++)
  {  
  	//to find lowest number
  	if(min >= nums[i+1])
  	{
  		min = nums[i+1];  
  	}

  	//to find highest number
  	if(max <=  nums[i+1])
  	{
  		max = nums[i+1];
  	}

  }

sum = min + max;
return sum;

}//end of function

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;