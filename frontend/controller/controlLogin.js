app.controller('controlLogin',function($scope,serviceLogin){
    $scope.login= function(){
        try{
        var data = {
            'email':$scope.email,
            'password':$scope.password
        }
         console.log(data);
         
        serviceLogin.login(data,$scope);
    }catch{
        console.log("error in control in login")
    }
    }
}); 