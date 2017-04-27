function AppMainController(){
    console.log('Running main controller');
}
var component = {
    templateUrl: 'main/main.html',
    controller : AppMainController
}
angular 
    .module('main')
    .component('main',component)