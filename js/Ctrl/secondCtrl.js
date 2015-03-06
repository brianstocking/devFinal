var app = angular.module('poopApp')




app.controller('CtrlThree', function($scope, $firebase, secondService, $filter){



    var ref = new Firebase("https://ipoop.firebaseio.com/"+ secondService.date +"/con");

    $scope.conFun = function(){
        ref.set({
            con: $scope.newMessages
        })




    }

})
