angular
  .module("paymentApp", [])
  .controller("PaymentController", function ($scope) {
    $scope.submitPayment = function () {
      if ($scope.paymentForm.$valid) {
        // send payment data to server
      } else {
        alert("Please fill out all required fields correctly.");
      }
    };
  });
