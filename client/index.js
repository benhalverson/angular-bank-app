'use strict';

angular.module('bank-app', ['firebase'])
.controller('master', ['$scope', function($scope){
  $scope.balance = 10000;
  $scope.name = 'Ben';
  $scope.deposits = [];
  $scope.withdraws = [];
  $scope.fees = [];

  $scope.deposit = function(){

    $scope.balance += $scope.amount;
    $scope.deposits.push({amount:$scope.amount, date: new Date()});
  };
  $scope.withdraw = function(){
    var fee = 0;
    if($scope >= 0 && ($scope.balance - $scope.amount < 0)){
      fee = 50;
    }

    $scope.balance -= $scope.amount + fee;
    $scope.withdraws.push({amount:$scope.amount, date:new Date()});
  };
}]);
