function produceDrivingRange(blockRange){
    return function(blockOne, blockTwo){
        let block1 = parseInt(blockOne.slice(0, -2));
        let block2 =  parseInt(blockTwo.slice(0, -2));
        if ((block2 - block1) > blockRange){
          return `${(block2-block1)-blockRange} blocks out of range`;  
        }else{
          return `within range by ${block2-block1}`;
        }
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return tip*fare;
    }
}

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name, driver){
            this.id =++driverId
            this.name = name;
        }
    }
}