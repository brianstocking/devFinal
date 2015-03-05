var app = angular.module('poopApp')

app.controller("poopCtrl", function($scope, $firebase) {
    var ref = new Firebase("https://ipoop.firebaseio.com/messages");
    var sync = $firebase(ref);
    // create a synchronized array for use in our HTML code
    $scope.messages = sync.$asArray();

    $scope.pooped = function() {
        $scope.messages.$add({
            number: $scope.newMessages


        })
    }



});
