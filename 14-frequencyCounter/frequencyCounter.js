function frequencyCounter(word) {
   var freq = {};
    for (var i=0; i< word.length; i++) {
        var character = word.charAt(i);
        if (freq[character]) 
        {
        	//to increment the count of repeating letters
           freq[character]++;
       }
         else {
         	//if the letter exists only one time
           freq[character] = 1;
        }
    
}
    return freq;
}  

// Do not edit this line;
module.exports = frequencyCounter;