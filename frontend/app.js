var app = angular.module('clientside', ['ui.router']);

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

        

    $urlRouterProvider.otherwise('login');


});


