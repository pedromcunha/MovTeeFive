var appDependencies = 
    ['templates-main',
    'appFiltersModule',
    'HeaderControllerModule',
    'appDirectiveModule',
    'appFactoriesModule',
    'userFactoryModule',
    'ui.router',
    // 'ngAnimate',
    'ui.bootstrap'];

var app = angular.module('trailerParke', appDependencies); //main module
var searchInput; //records a user input


app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '../public/templates/trailer-listings.html',
                controller: 'videoListingController'
            });
    }
]);

app.constant('apiKeys', {
    youtubeAPI: 'AIzaSyDYhqH1guvlxxocuttrwxE2kkvYefu0cqo',
    rottenTomatoesAPI: '4cwjthjq2hyxz7amh6jj5p4p'
});

/* TODO 
Replace this with the real server
Also replace the tests with the correct deployed api url */

app.constant('trailerParkeApi', {
    userRegistration: 'http://localhost:1337/api/register'
});