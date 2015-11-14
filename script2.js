var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);

app.controller('seatGrid', function($scope, $uibModal){
    $scope.arrayOfArrayOfSeats=[];
    var arrayOfSeats = [];

    function seat(row, column){
        this.row = row;
        this.column = column;
    }

    for(var i = 0; i<4; i++){
        arrayOfSeats = [];
        for(var j = 0; j<6; j++){
            var newSeat = new seat(i,j);
            arrayOfSeats.push(newSeat);
        }
        $scope.arrayOfArrayOfSeats.push(arrayOfSeats);
    }

    $scope.reserveSeat = function() {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            size: 'sm',
            templateUrl: 'modal.html',
            controller: 'ModalInstanceCtrl'
        });
    };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
    console.log(this);


  $scope.ok = function () {

    this.name = $scope.name;
    this.email = $scope.email;

    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});