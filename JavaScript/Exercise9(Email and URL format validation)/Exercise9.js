var returnValue;

function validateForm() {
	returnValue = true;
	var form = document.forms["registration"];
	
	var fields = document.getElementsByTagName("input");
	for (var i=0; i < fields.length; i++) {
		if (fields[i].type == 'text') {
			isBlank(fields[i].name, fields[i].value);
		}
	}
	
	//About Me
	var aboutMe = form ["About Me"].value;
	if(!isBlank("About Me", aboutMe) && aboutMe.length < 50) {
		alert("Minimum 50 characters required for about me.");
		returnValue = false;
	}
	
	//receive Notification
	var receiveNotification = form ["Receive Notification"].checked;
	if (!receiveNotification) {
		alert("Please check the Receive Notification checkbox.");
		returnValue = false;
	}
		
	if(!returnValue) {
		return returnValue;
	}	
	
	//Email
	var email = form ["Email"].value;
	var trimedEmail = email.trim();
	var emailRegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
	if(!emailRegExp.test(trimedEmail)) {
		alert("Please enter valid email.");
		returnValue = false;
	}	
	
	//HomePage
	var homePage = form ["Home Page"].value;
	var trimedHomePage = homePage.trim();
	var URLRegExp = new RegExp(/^([a-zA-Z]*:\/\/)?[a-zA-Z0-9\-\._]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)\/?$/);
	if(!URLRegExp.test(trimedHomePage)) {
		alert("Please enter valid Home Page adddress.");
		returnValue = false;
	}	
	
	return returnValue;
}

function isBlank(fieldName, fieldValue) {
	if (fieldValue==null || fieldValue.trim()=="") {
		alert(fieldName + " can't be empty.");
		returnValue = false;
	}
}