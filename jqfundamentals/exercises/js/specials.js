$(document).ready(function() {
	var $special = $('#specials');
	$special.find('li.buttons').remove();

	var $cachedData;

	var $dropdown = $special.find('select');
	$div = $('<div />');
	$div.appendTo($special);

	$dropdown.change( function() {
		if($cachedData) {
			changeData();
		} else {
			$.ajax( {
				type: 'get',
				dataType: 'json',
				url: 'data/specials.json',
				success: function(data) {
					$cachedData = data;
					changeData();
				}
			});	
		}
	});

	var changeData = function() {
		$div.html('');
		for(var key in $cachedData[$dropdown.val()]) {
			
			$h2 = $('<h2 />')
			$h2.text(key);
			$h2.appendTo($div);
			
			var $detail;
			if(key != 'image') {
				$detail = $('<p />');
				$detail.text($cachedData[$dropdown.val()][key]);
			} else {
				$detail = $('<img />');
				$imageURL = $cachedData[$dropdown.val()][key];
				if($imageURL.indexOf('/') == 0) {
					$lengthOfString = ($imageURL.length);
					$imageURL = $imageURL.substring('1', $lengthOfString);
				}
				$detail.attr("src", $imageURL);
			}
			$detail.appendTo($div);
		}
	}
});