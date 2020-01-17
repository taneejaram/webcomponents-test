describe("Image gallery", function() {
    
    it("making an assertion here", function() {
        a = true;
        expect(a).toBe(true);
    });

    it("using the to-equal matcher", function() {
        var a = { a : 3, b : 4 };
        var b = { a : 3, b : 4 } ;
        expect(a).toEqual(b);
    })
});