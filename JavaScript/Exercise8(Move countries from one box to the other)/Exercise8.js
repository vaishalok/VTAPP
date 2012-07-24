function moveItems(fromValue) {
    var fromMultiBox = null;
    var toMultiBox = null;
    
    if(fromValue=="leftToRight") {
    	fromMultiBox = document.getElementById("leftMultiBox");
    	toMultiBox = document.getElementById("rightMultiBox");
    } else if(fromValue=="rightToLeft") {
    	fromMultiBox = document.getElementById("rightMultiBox");
    	toMultiBox = document.getElementById("leftMultiBox");
    } 
    
    for (var i = 0; i < fromMultiBox.length; i++) {
        if (fromMultiBox.options[i].selected) {       
            var option = document.createElement("option");
            option.text = fromMultiBox.options[i].text;
            fromMultiBox.remove(i);
            toMultiBox.add(option, toMultiBox.options[toMultiBox.length]);
            
            i--; //because 1 item has been removed
        }
    }
}
