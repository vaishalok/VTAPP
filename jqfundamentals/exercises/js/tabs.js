$(document).ready(function() {
	var $modules = $('div.module');
	$modules.hide();
	
	var $tabs = $('<ul/>').insertBefore($modules.eq(0));
		
	$.each($modules, function(index, value) {
		var $tabText = $(value).find('h2');
		
		var $tab = $('<li>' + $tabText.text() + '</li>').appendTo($tabs);

		$tab.click(function() {
			$tab.addClass('current');
			$tab.siblings().removeClass('current');
			$(value).show();
			$(value).siblings('.module').hide();
		});
	});
	
	$modules.eq(0).show();
	$tabs.find('li:first').addClass('current');
});
