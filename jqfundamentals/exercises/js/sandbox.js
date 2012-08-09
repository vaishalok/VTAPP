//=================================
//2.1 Selecting
//================================= 

//Select all of the div elements that have a class of "module".
$('div.module');

//Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
$('#myListItem'); //best because directly using id for selecting an element is fastest. 
$('#myList li:eq(2)');
$('#myList li:nth-child(3)');

//Select the label for the search input using an attribute selector.
$('#search label[for="q"]');

//Figure out how many elements on the page are hidden
$(':hidden').length;

//Figure out how many image elements on the page have an alt attribute.
$('img[alt]').length;

//Select all of the odd table rows in the table body.
$('table.#fruits tBody tr:odd');



//=================================
//2.2 Traversing					
//================================= 

//Select all of the image elements on the page; log each image's alt attribute.
$('img').each(function(index, value) {
	console.log($(value).attr('alt'));
});

//Select the search input text box, then traverse up to the form and add a class to the form.
$('.input_text[name="q"]').parent().addClass('mainForm');

//Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$('#myList .current').removeClass("current").next().addClass('current');

//Select the select element inside #specials; traverse your way to the submit button.
$('#specials select').parent().next().children().first();
 
//Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$('#slideshow li:first').addClass('current').siblings().addClass('disabled');




//=================================
//2.3 Manipulating				
//================================= 

//Add five new list items to the end of the unordered list #myList.
var $myList = $('#myList');
for (var i=0; i<5; i++) {
	$('<li>LI ' + i + '</li>').appendTo($myList);
}

//Remove the odd list items
$('#myList li:odd').remove();

//Add another h2 and another paragraph to the last div.module
$('div.module:last').append("<h2> new h2 </h2>").append("<p> new paragraph </p>");

//Add another option to the select element; give the option the value "Wednesday"
$('#specials form select').append('<option value="wednesday">Wednesday</option>');

//Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
$('<div class="module"/>')
.html($.find('img')[0].cloneNode())
.insertAfter('div.module:last');