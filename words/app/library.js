'use strict'

module.exports = {

	words : function (inputString) {

		var expectedCounts = {}, inputArray, inputString;
		inputString = inputString.replace(/\n/g, " ");
		inputString = inputString.replace(/\t/g, " ");
		inputString = inputString.replace(/[ ]{2,}/g, " ");
		inputArray = inputString.split(" ");

		//var index, count = 0, n = inputArray.length;

		inputArray.forEach(function(index) {
			if (Object.hasOwnProperty.call(expectedCounts, index)){
				expectedCounts[index] += 1;
			} 
			else {
				expectedCounts[index] = 1;
			}
		 
		  });
		
		//expectedCounts = JSON.stringify(expectedCounts);  
		return 	expectedCounts;

	}


}