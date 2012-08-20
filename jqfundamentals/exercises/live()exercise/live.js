$(document).ready(function() {
	var $stack = $('#stack');
	
	$('#addItem').live("click", function() {
		$('<div />')
		.addClass('cell')
		.text($stack.children().length+1)
		.appendTo($stack);
	});
	
	$stack.find("div")
	.live("click", function() {
		$stack.find("div")
		.removeClass('highlight');
		$(this).addClass('highlight');
	});
	
	$stack.find("div:last")
	.live("click",function() {
		$(this).remove();
	});
});
