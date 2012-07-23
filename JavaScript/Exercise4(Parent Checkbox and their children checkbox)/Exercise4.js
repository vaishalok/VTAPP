function expandSubCheckboxes(parentLabel) {
	var parentCheckbox = parentLabel.firstChild;
	var subCheckboxesDiv = parentLabel.nextSibling.nextSibling;
	var subLabelArray = subCheckboxesDiv.children;
	
	if(parentCheckbox.checked) {
		subCheckboxesDiv.style.display="block";
		parentLabel.scrollIntoView();
		for(label in subLabelArray) {
			subLabelArray[label].firstChild.checked=true;
		} 
	} else {
		subCheckboxesDiv.style.display="none";
		for(label in subLabelArray) {
			subLabelArray[label].firstChild.checked=false;
		}
	}
}