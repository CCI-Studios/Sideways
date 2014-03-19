(function($) {
	$(function(){
		setTimeout(doLayout, 100);
	});

	function doLayout()
	{
		$(".view-menus > .view-content").masonry({itemSelector:".views-row", stamp:"h3"});
	}
}(jQuery));
