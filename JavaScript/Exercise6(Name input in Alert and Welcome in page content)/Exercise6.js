function getName() {
	var para = document.getElementById("name");
	var firstName = null;
	var lastName = null;
	
	do {
		firstName = prompt("First Name:");
	} while(!validateName(firstName));
	
	
	do {
		lastName = prompt("Last Name:");
	} while(!validateName(lastName));
	

	var message = "Hello " + firstName + " " + lastName;
	alert(message);
	para.innerHTML = message;
}

function validateName(name) {
	if(name == null || name =="" || name.trim == "") {
		return false;
	}
	return true;
}
