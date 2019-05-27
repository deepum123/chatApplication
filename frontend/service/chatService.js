app.service('chatServices', function ($http) {
    try {
        this.getAllUsers = function ($scope, usertoken) {
            console.log("get all users called in service chat")
          //  var usertokenn = localStorage.getItem('token');
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:3000/auth/getAllUser',//changes here...
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {//call back function of http sevice
                    console.log("chat service get all users it returns some responce")
                    console.log(response.data.response.result)
                    $scope.allUser = response.data.response.result;
                   
                
                    
                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("error found here in getting users")
    }
    try {
        this.getUserMsg = function ($scope) {
            console.log("get user msg is called")
            var arr = [];
            var usertoken = localStorage.getItem('token');
            $http({
                method: 'GET',//assigning value to http proprties 
                url: 'http://localhost:3000/auth/getUserMsg',//assigning value to http proprties 
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {
                    console.log("get user msg returns something")
                    console.log(response.data);

                    for (let i = 0; i < (response.data.result.length); i++) {  //(response.data.message).length *change was done
                     var   a = response.data.result[i];
 console.log("a is print is values"+a)
 if (((localStorage.getItem('userid') == a.senderUserId) && 
(localStorage.getItem('ruserId') == a.reciverUserId)) || 
 ((localStorage.getItem('userid') == a.reciverUserId &&
  localStorage.getItem('ruserId') == a.senderUserId))) {
    
    
                            console.log("local user is ", localStorage.getItem('userid'), "a user is ", a.senderUserId, " local rcvrid is ", localStorage.getItem('ruserId'), "  reciver is ", a.recieverUserId);
                        
                            arr.push(a);//pushing all message to array
                            console.log("after if loop"+arr)
                        }
                  }
                    
                    $scope.allUserArr = arr;
                    
                    console.log("Users msg successfull ", arr);
                    
                },
                function errorCallback(response) {
                    console.log("Unsuccessfull ");
                    console.log(response);

                }
            );
        }
    }
    catch (err) {
        console.log("founr error in getting message")
    }

})