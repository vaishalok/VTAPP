$(document).ready(function() {
	var $slideShow = $('#slideshow').prependTo('body');
	var $slides = $slideShow.find('li').hide();
	var $slidesCount = $slides.length;
	var $countPara = $('<center> <p> <p/> <center/>').insertAfter($slideShow);
	
	
	function fadeInOut() {
		$main = $(this);
		setTimeout(function() {
			$main.fadeOut(1000,function() {
				var $prev = $main.prevAll().length + 1;
				if($prev == $slidesCount) {
					$prev = 0;
				}
				$slides.eq($prev).fadeIn(1000, fadeInOut);
				$countPara.text(($prev + 1) + ' of ' + $slidesCount);
			});
		}, 3000);
	}

	$slides.eq(0).fadeIn(1000, fadeInOut);
	$countPara.text(1 + ' of ' + $slidesCount);
});