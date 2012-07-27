function alertDomainSubdomain() {

	var form = document.forms["form"];
	
	var URL = form ["URL"].value;
	
	if (URL==null || URL.trim() =="") {
		alert("URL field is blank.");
		return false;
	} else {
		var trimmedURL = URL.trim();
	    
		var pattern = new RegExp(/^([a-zA-Z]*:\/\/)?([a-zA-Z0-9\-_]+)\.([a-zA-Z0-9\-_\.]*)\/?([a-zA-Z0-9\-_\.\/]*)$/);
		
		if (!pattern.test(trimmedURL)) {
		    alert("Please enter a valid URL");
	    	return false;
	    } else {
	    	if(RegExp.$3.indexOf(".") == -1) {
	    		alert("Domain is " + RegExp.$2 + "." + RegExp.$3);
	    	} else {
	    		if(RegExp.$2 != "www") {
	    			alert("Sub-domain is " + RegExp.$2);
	    		}
	    		alert("Domain is " + RegExp.$3);
	    	}
	    	return true;
	    }
	}	
}