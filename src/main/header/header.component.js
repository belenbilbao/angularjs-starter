function AppHeaderController(){
    console.log('Running header controller');
}
var component = {
    templateUrl:'main/header/header.html',
    controller: AppHeaderController
}
angular 
    .module('header')
    .component('appHeader', component);