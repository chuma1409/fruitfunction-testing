describe('The FruitEater function ', function(){
    it('should count how many apples have beed eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 2);
    });
    
 