function AppCategoriesController(ItemService) {
    console.log('Running categories controller');
    var vm = this;
    //sie es indefinido el filtro ?
    vm.categoryType;
    var promise = ItemService.getItems();
    promise.then(function (result) {
        vm.categories = result;
    }).catch(function (error) {
        console.log('error found', error);
        vm.error = 'cannot find items';
    }).finally(function () {
        console.log('get items has been finished');
    });

    vm.filterComputers = function () {
        vm.categoryType = 'computadora';
    }
    vm.filterSmartphones = function () {
        vm.categoryType = 'celular';
    }
    vm.notFilter = function () {
        vm.categoryType = undefined;
    }

    vm.editItem = function (id) {
        console.log('entro a editar la categoria con id' + id);
    }

    vm.deleteItem = function (item) {
        console.log('entro a borrar la categoria con id' + item);
        var promise = ItemService.deleteItem(item);
        promise.then(function (result) {
            console.log('student has been deleted succesfully');
        }).catch(function (error) {
            console.log('error found', error);
        }).finally(function () {
            console.log('get llogged user has been finished');
        });
    }

    vm.sortColumn = "id";
    vm.reverseSort = false;
    vm.sortData = function (column) {
        vm.reverseSort = (vm.sortColumn == column) ? !vm.reverseSort : false;
        vm.sortColumn = column;
    }
    vm.getSortClass = function (column) {
        if (vm.sortColumn == column) {
            return vm.reverseSort ? 'arrow-down' : 'arrow-up';
        }
    }
}
var component = {
    templateUrl: 'main/categorias/categorias.html',
    controller: AppCategoriesController
}
angular
    .module('main')
    .component('appCategory', component);
