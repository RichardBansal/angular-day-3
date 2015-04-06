app.directive('flashCard', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/directives/flashCard/flashCard.html',
		scope: {
			fCard: '=card'
		}
	};
});