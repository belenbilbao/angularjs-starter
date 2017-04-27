angular
    .module('main')
    .factory('UserService', UserService);

function UserService($q, $resource) {
    var resource = $resource('http://localhost:9001/users');

    return {
        getLoggedUser: getLoggedUser,
        getUsers: getUsers
    }
    function getUsers() {
        var future = $q.defer();
        resource.query({username:"test"}).$promise.then(function (result) {
            future.resolve(result);
        }).catch(function (error) {
            future.reject(error);
        });
        return future.promise;
    }

    function getLoggedUser(user) {
        console.log('entro a getLoggedUser' + user);
        var future = $q.defer();
        resource.query({username:user.username, password:user.password}).$promise.then(function (result) {
            future.resolve(result);
        }).catch(function (error) {
            future.reject(error);
        });
        return future.promise;


       /* var finalresult;

        var users = getUsers();
        users.then(function (result) {
            result.forEach(function (element) {
                if (element.username === user.username && element.password === user.password) {
                    console.log('aca devolvera el ususario' + element.username);
                    return element;
                }
            });
        }).catch(function (error) {
            console.log('error found', error);
        }).finally(function () {
            console.log('get llogged user has been finished');
        });*/
    }
}
