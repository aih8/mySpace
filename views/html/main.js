angular.module('huApp', ['ui.router', 'ngSanitize', 'ngAnimate'])
    .config(['$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                rewriteLinks: false
            });
        }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/404");
            $stateProvider
                .state('notFound', {
                    url: "/404",
                    templateUrl: "layouts/common/notFound.html",
                    controller: function () {
                    }
                })
                .state('index', {
                    abstract: true,
                    url: '/main',
                    templateUrl: './view/html/root.html'
                })
        }])
    .run(['$state', '$location', function
        ($state) {

    }])

;