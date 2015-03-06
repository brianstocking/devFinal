var app = angular.module('poopApp')




app.controller('CtrlFour', function($rootScope, $scope, $firebase, secondService){

    var ref = new Firebase("https://ipoop.firebaseio.com/" + secondService.date + "/stomach");

    $scope.stomachFun = function(){
        ref.set({
            stomach: $scope.newMessages

        })
    }
})
