describe('CookieDetector',function () {
    var itemswithcookies;
    var itemswithoutcookies;
    beforeEach(function () {
        itemswithoutcookies = ['apples','mango','banana','orange'];
        itemswithcookies = ['cookies','lays','kurkure','potatoCracker'];
    });
    it('should be able to detect cookies', function () {
        var result = detectCookie(itemswithcookies);
        expect(result).toBe(true);
    });
    it('should be able to detect no cookies',function () {
        var result = detectCookie(itemswithoutcookies);
        expect(result).not.toBe(true);
    });
});