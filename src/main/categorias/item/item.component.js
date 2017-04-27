function AppItemController($log, ItemService){
    console.log('running AppItemController');
    var vm = this;
    vm.delete = deleteItem;

    function deleteItem(item){
        var promise = ItemService.deleteItem(item);
        promise.then(function (result) {
            console.log('item has been deleted succesfully');
            vm.onDelete();

        }).catch(function (error) {
            console.log('error found', error);
        }).finally(function () {
            console.log('delete item finished');
        });
    }
}

var component = {
    templateUrl : 'main/categorias/item/item.html',
    controller: AppItemController,
    bindings:{
        item : '=',
        onDelete : '&'
    }
}
angular
    .module('main')
    .component('appItem', component);