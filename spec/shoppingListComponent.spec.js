describe('Component Testing',function () {
   var $componentController;
   
   beforeEach(module('ShoppingListComponentApp'));
   beforeEach(inject(function (_$componentController_) {
       $componentController = _$componentController_;
   }));

   it('Should be able to detect no cookies',function () {
      var bindings = {items : [{name : 'apples', quantity : '5'}]};
      var ctrl = $componentController('shoppingList',{$element :null},bindings);
      
      var CookiesinList = ctrl.cookiesInList();
      expect(CookiesinList).toEqual(false);
   });

   it('Should be able to detect cookies',function () {
      var bindings = {items :[{name : 'Cookies', quantity : '5'}]};
      var ctrl = $componentController('shoppingList',{$element : null},bindings);
      
      var CookiesinList = ctrl.cookiesInList();
      expect(CookiesinList).toBe(true);
   });
});