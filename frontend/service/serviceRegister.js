app.service('serviceRegister', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        console.log("data on service register--- ", data);
        try{
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: data

        }).then(
            function successCallback(response) {
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {

                console.log("register Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }catch(err){
        console.log("error in service register in front end")

    }
    }
});