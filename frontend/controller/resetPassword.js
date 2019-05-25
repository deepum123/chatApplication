app.controller('controlResetPassword', function ($scope, serviceResetPassword) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
            'password': $scope.password
        }

        console.log("register calling", user);
       
            serviceResetPassword.resetPassword(user, $scope);
        }
    }
);