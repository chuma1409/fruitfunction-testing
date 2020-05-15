var FruitEater = function(){
    
    var pear = 0;
    var apple = 0;
    
    function pearEat(){
      pear++;
    }

    function appleEat(){
      apple++;
    }

    function applesEaten(){
      return apple;
    }

    function pearsEaten(){
      return pear;
    }

    return {
      pearEat,
     pearsEaten ,
     appleEat, 
     applesEaten
      
    }

}
 
