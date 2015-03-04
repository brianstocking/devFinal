var app = angular.module('poopApp')

app.controller("poopCtrlTwo", function($scope, $firebase) {
    var ref = new Firebase("https://ipoop.firebaseio.com/other");
    var sync = $firebase(ref);
    $scope.other = sync.$asArray();


    $scope.poopeds = function(){
        $scope.other.$add({other: $scope.newOther.other

        })


    };
});