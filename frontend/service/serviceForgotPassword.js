app.service('serviceForgotPassword', function ($http, $location) {


    this.forgotPassword = function (data, $scope) {
        try{
        $http({
            method: 'POST',
            url: 'http://localhost:3000/forgotPassword',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("forgotPassword successfull ");
               // console.log(response.data)
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
                var token = response.data.token;
                console.log("forgot token "+token)
                console.log("forgot name"+name)
                localStorage.setItem("userId", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token",token);
                $location.path('/login')
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {

                console.log("register Unsuccessfull ");
                console.log(response);
                $scope.loginMessage = 'EmailId Incorrect ';


            }
        );
        }catch(err){
            console.log("error in service forgot password")

        }
    }

});