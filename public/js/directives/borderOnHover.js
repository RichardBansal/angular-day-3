app.directive('borderOnHover', function(){
	return {
		restrict: 'A',
		link: function (scope, element, attrs){
			element.on('mouseenter', function(){
				element.css('border', '5px solid black');
			});

			element.on('mouseleave', function(){
				element.css('border', '1px solid black');
			});
		}
	};
});