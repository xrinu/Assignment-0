function pairSum(nums, target) {
	if(nums.length <2)    //if less than two numbers
	{
		return error;
	}
	else{
  for(var i=0; i<nums.length; i++)
  {
  	for(var j= i+1; j<nums.length; j++)
  	{
  		if(nums[i]+nums[j]==target)    //if equal to target
  			return true;
  	}
  }
}
return false;      //if no pair sum is equal to target
}

// Do not edit this line;
module.exports = pairSum;