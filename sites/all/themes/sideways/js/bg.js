var header_image = 1;
(function($) {
	$(function(){
		if ($("body").hasClass("front"))
		{
			next();
			setInterval(next, 8000);
		}
		else
		{
			var url = $("#header-image").data("url") || "/sites/all/themes/limbo/images/header1.jpg";
			$("#navigation").css("background-image", "url("+url+")");
		}
	});

	function next()
	{
		var url = get(header_image);
		var $top = $("#navigation");

		var $new = $("<div class='bg'></div>")
		.css({
			"background-image":"url("+url+")",
			"z-index":"-2"
		})
		.appendTo($top);

		$top
		.find(".bg")
		.not($new)
		.css("z-index", "-1")
		.fadeOut(2000, function(){
			$(this).remove();
		});

		increment();
	}

	function get(i)
	{
		return $("#block-views-homepage-header-images-block .views-row-"+i+" img").attr("src");
	}

	function increment()
	{
		header_image++;
		if (header_image > $("#block-views-homepage-header-images-block .views-row").length)
			header_image = 1;
	}
}(jQuery));
