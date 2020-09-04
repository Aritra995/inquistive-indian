describe('Controller Testing',function () {
    
    beforeEach(function () {
        module(function ($provide) {
            $provide.service('ShoppingListServiceMock',function () {
                var service = this;
                service.addItem = function (name,quantity) {
                    throw new Error('Testing message!');
                };
                service.getItems = function () {
                  return null;  
                };
            });
        });
        module('ShoppingListApp');
    });

    var $controller;
    var ShoppingListcontroller;
    beforeEach(inject(function (_$controller_,ShoppingListServiceMock) {
        $controller = _$controller_;

        ShoppingListcontroller = $controller('ShoppingListController',{ShoppingListService : ShoppingListServiceMock});
    }));

    it('should show error message',function () {
       ShoppingListcontroller.addItem();
       expect(ShoppingListcontroller.errorMessage).toBe('Testing message!'); 
    });
})