
app.controller('controlRegister', function ($scope, serviceRegister) {

    // for registration form
    $scope.register = function () {
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password,
            
        }

        console.log("register calling", user);
       
            serviceRegister.registerUser(user, $scope);
            
        
    }
});

