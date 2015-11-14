var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);

app.controller('seatGrid', function($scope, $uibModal){

    function seat(row, column){
        this.reserved = 'available';
        this.name = '';
        this.email = '';
        this.row = row;
        this.column = column;
    }

    $scope.arrayOfArrayOfSeats=[];
    var arrayOfSeats = [];

    for(var i = 0; i<4; i++){
        arrayOfSeats = [];
        for(var j = 0; j<6; j++){
            var newSeat = new seat(i,j);
            arrayOfSeats.push(newSeat);
        }
        $scope.arrayOfArrayOfSeats.push(arrayOfSeats);
    }

    $scope.reserveSeat = function(seat) {
        $scope.seat=seat;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            size: 'sm',
            templateUrl: 'modal.html',
            controller: 'ModalInstanceCtrl',
            resolve:{
                seat: function () {
                    return $scope.seat;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
             $scope.selected = selectedItem;
             $scope.selected.reserved = 'unavailable';

         });
    };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, seat) {
    $scope.seat = seat;

    $scope.ok = function () {
        $scope.seat.name = $scope.name;
        $scope.seat.email = $scope.email;
        $uibModalInstance.close($scope.seat);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});