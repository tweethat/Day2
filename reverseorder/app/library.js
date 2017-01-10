'use strict'

module.exports = {

	reverseString : function (inputString) {

		var x, inputArray, reverseArray;
		inputArray = inputString.split("");
		//console.log(inputArray) ;
		reverseArray = inputArray.reverse()
		//console.log(reverseArray) ;
		x = reverseArray.toString();
		x = x.replace(/,/g,"");

		if (inputString == '') {
			return null;
		}
		else if (x === inputString) {
			return true;
		}
		else {
			return x;
		}
		
		//console.log(x);
}

}