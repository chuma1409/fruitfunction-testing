describe('The FruitEater function ', function(){
    it('should count how many apples have been eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.appleEat();
        appleAndPearEater.appleEat();
        assert.equal(appleAndPearEater.applesEaten(), 2);
    });
    
    it('should count how many apples and pears have been eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.appleEat('apple');
        appleAndPearEater.pearEat('pear');
        appleAndPearEater.appleEat('apple');
        appleAndPearEater.pearEat('pear');
        appleAndPearEater.appleEat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 3);
        assert.equal(appleAndPearEater.pearsEaten(), 2);
    });
})