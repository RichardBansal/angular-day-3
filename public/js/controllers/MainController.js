app.controller('MainController', function (FlashCardsFactory, ScoreFactory, $scope) {

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = null;

    $scope.flashCards = [];

    $scope.getCategoryCards = function (theCategory) {
        //<loader>
        $scope.currentCategory = theCategory;
        FlashCardsFactory.getFlashCardsByCategory(theCategory).then(function (cards) {
            $scope.flashCards = cards;
            ScoreFactory.show = true;
        });
    };

    $scope.getAllCards = function () {
        //<loader>
        $scope.currentCategory = null;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
            ScoreFactory.show = true;
        });
    };

    $scope.getAllCards();

});