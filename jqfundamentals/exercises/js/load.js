$(document).ready(function() {
	var blogHeaders = $('#blog h3');
	blogHeaders.each(function() {
		var $this = $(this); 
		var $target = $('<div/>').insertAfter($this);
		$this.data('target', $target);
	}); 
		
	blogHeaders.click(function(e) {
		var $this = $(this),
		$a = $this.find('a'),
		$target = $this.data('target'),
		href = $a.attr('href'),
		id = '#' + href.split('#')[1];
		e.preventDefault();
		$target.load('data/blog.html ' + id);
	});
});