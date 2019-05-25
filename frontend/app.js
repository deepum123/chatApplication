var app = angular.module('clientside', ['ui.router','btford.socket-io']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'View/signin.html',
            controller: 'controlLogin'

        })
        
    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'View/forgot.html',
        controller: 'controlForgotPassword'

    })
   
    $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'View/signup.html',
            controller: 'controlRegister'
        })
        $stateProvider.state('resetPassword', {
            url: '/resetPassword/:token',
            templateUrl: 'View/reset.html',
            controller: 'controlResetPassword'
        
        })
        $stateProvider.state('dashBoard',{
            url:'/dashBoard',
            templateUrl:'View/dashBoard.html',
            controller:'chatController'

        })
        

    $urlRouterProvider.otherwise('login');


});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000') 
    });
}]);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);