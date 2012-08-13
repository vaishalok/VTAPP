$(document).ready(function() {
	$('#blog li h3').click(function(e) {
		e.preventDefault();
		var $clickedLi = $(this);
		var $paragraph = $clickedLi.next('p');
			
		$paragraph.slideToggle(function() {
			$clickedLi.parent().siblings().find('p:visible').slideUp();
		});
	});
});