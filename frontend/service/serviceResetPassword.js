app.service('serviceResetPassword', function ($http, $location) {

    this.resetPassword = function (data, $scope) {
        try{
            var usertoken = localStorage.getItem('token');
        console.log("data on service register--- ", data);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/resetPassword/:token',
            data: data,
            headers: {
                'token': usertoken,
            }
          
        }).then(
            function successCallback(response) {
                console.log("reset password successfull ");
                console.log(response);
                $scope.message = "reset password successfull";
                $location.path('/login');

            },
            function errorCallback(response) {

                console.log("reset password Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }catch(err){
        console.log("error in service reset in front end")

    }
    }
});