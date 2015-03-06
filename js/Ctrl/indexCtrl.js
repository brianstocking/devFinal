var app = angular.module('poopApp')

app.controller('CtrlTwo', function($scope, $firebase, secondService){
    var ref = new Firebase("https://ipoop.firebaseio.com/"+ secondService.date +"/times");

    $scope.timesFun = function(){
        ref.set({
            times: $scope.newMessages
        })




    }


})
