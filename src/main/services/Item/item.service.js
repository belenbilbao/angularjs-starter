angular
    .module('main')
    .factory('ItemService', ItemService);

function ItemService($q, $resource) {
    var resource = $resource('http://localhost:9003/categories/:id',
    { id: '@id' });

    return {
        getItems: getItems,
        deleteItem : deleteItem
    }
    function getItems() {
        var future = $q.defer();
        resource.query().$promise.then(function (result) {
            future.resolve(result);
        }).catch(function (error) {
            future.reject(error);
        });
        return future.promise;
    }
    function deleteItem(item) {
        var future = $q.defer();
        resource.delete({id : item.id}).$promise.then(function (result) {
            future.resolve(result);
        }).catch(function (error) {
            future.reject(error);
        })
        return future.promise;
    }
}
