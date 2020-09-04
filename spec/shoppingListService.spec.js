describe('ShoppingListService Test',function () {
    var $httpBackend;
    var ApiBasePath;
    var menuCategories;
   
    beforeEach(function () {
       module('MenuCategoriesApp');

       inject(function ($injector) {
          menuCategories = $injector.get('MenuCategoriesService');
          ApiBasePath = $injector.get('ApiBasePath');
          $httpBackend = $injector.get('$httpBackend'); 
       });
   });

   it('Should Show menu Categories',function () {
       $httpBackend.whenGET(ApiBasePath + '/categories.json').respond('Data from server');
       menuCategories.getMenuCategories().then(function (response) {
          expect(response.data).toBe('Data from server'); 
       });
       $httpBackend.flush();
   });
   it('should show each menu categories',function () {
      $httpBackend.whenGET(ApiBasePath + '/menu_items.json?category=L').respond('Each Menu Item from Server');
      menuCategories.getMenuForCategory('L').then(function (response) {
          expect(response.data).toEqual('Each Menu Item from Server');
      });
      $httpBackend.flush();
   });
});