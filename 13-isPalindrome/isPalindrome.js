function isPalindrome(word) {
	//
  var len = Math.floor(word.length / 2);
  for (var i = 0; i < len; i++)
  {
    if (word[i] !== word[word.length - i - 1])
      return false;
  }
  return true;
}

// Do not edit this l ine;
module.exports = isPalindrome;