app.controller('controlResetPassword', function ($scope, serviceResetPassword) {

    // for registration form
    $scope.resetPassword = function () {
        try{
        var user = {
            'password': $scope.password
        }

        console.log("register calling", user);
       
            serviceResetPassword.resetPassword(user, $scope);
        
    }catch{
        console.log("error in control reset password in front end")
    }}
    }
);
