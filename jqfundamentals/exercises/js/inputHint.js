$(document).ready(
	function() {
		var $searchBox = $('#search input[name]=q');
		$searchBox.addClass('hint');

		var searchBoxLabel = $('#search label[for]=q');
		var hintText = searchBoxLabel.text();
		searchBoxLabel.remove();
	
		$searchBox
			.bind('focus', function() {
				$searchBox.removeClass('hint');
				if($searchBox.val() == hintText) {
					$searchBox.val('');
				}
			})
			.bind('blur', function() {
				if (!$.trim($searchBox.val())) {
					$searchBox.val(hintText).addClass('hint');
				}
			});
	}
); 		  		