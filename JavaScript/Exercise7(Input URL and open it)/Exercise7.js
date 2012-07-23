function loadURL() {
	var url = null;
	url = prompt("Enter URL:", "http://");
	if(url == null || url =="" || url.trim == "") {
		alert("You have entered a blank URL.");
	} else {
		window.open(url, "URL", "width=400px, height=450px, scrollbars=0, toolBar=0, titlebar=0, status=0");
	}
}
