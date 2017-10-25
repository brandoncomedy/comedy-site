
(function (window) {


	var truncate = function (number, decimal) {
		
		var value = Math.floor(number*Math.pow(10, decimal))/Math.pow(10, decimal);
		
		return value;
	}


	window.utility = {
		truncate:truncate
	}

}(window));
