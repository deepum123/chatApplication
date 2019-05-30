app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {

    $scope.forgotPassword = function () {
        try{
        var data = {
            'email': $scope.email
        }
        serviceForgotPassword.forgotPassword(data, $scope);
    }catch{
        console.log("error in control forgot password")
    }
    }
});