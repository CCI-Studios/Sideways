(function($) {
	$(function(){
		var $body = $("body");
		var $tabs = $("#content ul.tabs.primary");
		var tabTemplate = '<div class="tabs"><h2 class="element-invisible">Primary tabs</h2><ul class="tabs primary"></ul></div>';

		if ($body.hasClass("logged-in"))
		{
			if ($tabs.length == 0)
			{
				$("#content .region-content").before(tabTemplate);
				$tabs = $("#content ul.tabs.primary");
			}

			if ($body.hasClass("menu"))
			{
				$tabs.append("<li><a href='/node/add/menu-item'>Add Menu Item</a></li>");
				$tabs.append("<li><a href='/node/add/menu-footer-item'>Add Menu Footer Item</a></li>");
			}
			else if ($body.hasClass("features"))
			{
				$tabs.append("<li><a href='/node/add/weekly-feature'>Add Weekly Feature</a></li>");
				$tabs.append("<li><a href='/node/add/single-promo'>Add Promo</a></li>");
			}
			else if ($body.hasClass("events"))
			{
				$tabs.append("<li><a href='/node/add/event'>Add Event</a></li>");
			}
			else if ($body.hasClass("photos"))
			{
				$tabs.append("<li><a href='/node/add/photos'>Add Photos</a></li>");
			}
		}
	});
}(jQuery));
