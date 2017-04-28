function AppLoginUserController($location,$state,UserService ) {
    console.log('Running login controller');
    var vm = this;
    vm.user = {};
    vm.login = function () {
        var loggedUser;
        //llamar al servicio de getusers
        var promise = UserService.getLoggedUser(vm.user);
        promise.then(function (result) {
            console.log('este es el resultado' + result.length);
           if (result.length != 0) {
                console.log('el usuario se encontro');
                $state.current.data.requiredAuth = true;
                $location.path('/categorias');
            }
            else {
                console.log('no se encontro al ususario');
                vm.error = 'User or Password is incorrect. Please try again';
            }
        }).catch(function (error) {
            console.log('error found', error);
        }).finally(function () {
            console.log('get llogged user has been finished');
        });

    }
}
var component = {
    templateUrl: 'main/login/login.html',
    controller: AppLoginUserController
}
angular
    .module('main')
    .component('appLogin', component);