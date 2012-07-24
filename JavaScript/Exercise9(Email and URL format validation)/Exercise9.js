function validateForm() {

	var form = document.forms["registration"];
	var returnValue = true;
	
	var loginId = form ["loginId"].value;
	if (loginId==null || loginId=="") {
		alert("Login Id can't be empty.");
		returnValue = false;
	}
	
	var email = form ["email"].value;
	if (email==null || email=="" || email.trim() =="") {
		alert("Email can't be empty.");
		returnValue = false;
	} else {
		var trimedEmail = email.trim();
		var emailRegExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
		if(!emailRegExp.test(trimedEmail)) {
			alert("Please enter valid email.");
			returnValue = false;
		}	
	}
	
	var name = form ["name"].value;
	if (name==null || name=="") {
		alert("Name can't be empty.");
		returnValue = false;
	}
	
	var homePage = form ["homePage"].value;
	if (homePage==null || homePage=="" || homePage.trim() == "") {
		alert("Home Page can't be empty.");
		returnValue = false;
	} else {
		var trimedHomePage = homePage.trim();
		var URLRegExp = new RegExp(/^([a-zA-Z]*:\/\/)?[a-zA-Z0-9\-\._]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)\/?$/);
		if(!URLRegExp.test(trimedHomePage)) {
			alert("Please enter valid Home Page adddress.");
			returnValue = false;
		}	
	}
	
	var aboutMe = form ["aboutMe"].value;
	if (aboutMe==null || aboutMe=="") {
		alert("About Me can't be empty.");
		returnValue = false;
	} else if(aboutMe.length < 50) {
		alert("Minimum 50 characters required for about me.");
		returnValue = false;
	}
	
	var receiveNotification = form ["receiveNotification"].checked;
	if (!receiveNotification) {
		alert("Please check the Receive Notification checkbox.");
		returnValue = false;
	}
	
	return returnValue;
	
}