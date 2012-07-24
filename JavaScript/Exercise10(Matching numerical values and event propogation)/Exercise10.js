function validateNumber() {

	var form = document.forms["form"];
	
	var number = form ["enterNumber"].value;
	
	if (number==null || number.trim() =="") {
		alert("Please enter a number.");
		return false;
	} else {
		var trimmedNumber = number.trim();
	    var pattern = /^[-+]?\d+(\.\d*)?$/;
	    var result = form["result"];   
	    if (pattern.test(trimmedNumber)) {
		    result.value = "true";    
	    	alert("Entered value is numeric.");
	    	return true;
	    } else {
	        result.value = "false";
	        return false;
	    }
	}	
}