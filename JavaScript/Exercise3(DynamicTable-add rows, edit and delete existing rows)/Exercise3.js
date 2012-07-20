function addNewRow() {
	var employeeTable = document.getElementById("employeeTable");
	
    var rowCount = employeeTable.rows.length;
    var newRow = employeeTable.insertRow(rowCount);

    //creating name textBox
    insertCellWithTextBox(newRow, 0, "");
    
    //creating email textBox
    insertCellWithTextBox(newRow, 1, "");
    
    //creating action cell
    //*** save button
    var actionCell = insertCell(newRow, 2);
    var saveButton = createButton("Save");
    actionCell.appendChild(saveButton);
    saveButton.setAttribute("onclick", "saveOrEditRow(this)");
    
    
    //*** slash
    var slash = document.createElement("span");
    slash.innerHTML = " / ";
    actionCell.appendChild(slash);
    
    //*** delete Button
    var deleteButton = createButton("Delete");
    actionCell.appendChild(deleteButton);
    deleteButton.setAttribute("onclick", "deleteRow(this)");
}

function insertCell(row, column) {
	return row.insertCell(column);
}

function insertCellWithTextBox(row, column, value) {
	var cell = insertCell(row, column);
    var textBox = document.createElement("input");
    textBox.type = "textbox";
    textBox.value = value;
    cell.appendChild(textBox);
}

function createButton(value) {
	var button = document.createElement("button");
	button.innerHTML = value;
	button.style.backgroundColor = "transparent";
	button.style.color = "blue";
	button.style.borderWidth = "0px";
	button.style.borderStyle = "none";
	return button;
}

function saveOrEditRow(button) {
	var tableRow = getTableRow(button);
	var nameCell = getRowCell(tableRow, 0);
	var nameTextBox = nameCell.childNodes[0];
	var emailCell = getRowCell(tableRow, 1);
	var emailTextBox = emailCell.childNodes[0];
	
	if(button.innerHTML == "Save") {
		disableTextBoxFeature(nameTextBox);
		disableTextBoxFeature(emailTextBox);
		button.innerHTML = "Edit";
	} else if(button.innerHTML == "Edit") {
		enableTextBoxFeature(nameTextBox);
		enableTextBoxFeature(emailTextBox);
		button.innerHTML = "Save";
	}
}

function getTableRow(button) {
	return button.parentNode.parentNode;
}

function getRowCell(tableRow, cellPosition) {
	return tableRow.cells[cellPosition];
}

function disableTextBoxFeature(textBox) {
	textBox.style.borderWidth = "0px";
	textBox.readOnly = true;
}

function enableTextBoxFeature(textBox) {
	textBox.style.borderWidth = "1px";
	textBox.readOnly = false;
}

function deleteRow(button) {
	var employeeTable = document.getElementById("employeeTable");
	employeeTable.deleteRow(getTableRow(button).rowIndex);
}