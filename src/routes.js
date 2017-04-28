angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'main',
      redirectTo: 'login'
    })
    .state('login', {
      parent: 'app',
      url: 'login',
      component: 'appLogin',
      data: {
        requiredAuth: false
      }
    }).state('test', {
      parent: 'app',
      url: 'test',
      component: 'myContent'
    })
    .state('categorias', {
      parent: 'app',
      url: 'categorias',
      component: 'appCategory'
    });
}
