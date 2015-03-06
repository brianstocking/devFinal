var app = angular.module('poopApp')

app.service('secondService', function(){

    this.date = new Date().toDateString()




})
