function produceDrivingRange(blockRange){

    return function(startRange, endRange){
        const distance = parseInt(endRange) - parseInt(startRange);
        if(distance > blockRange){
            return `${distance - blockRange} blocks out of range`;
        }else{
            return `within range by ${distance}`;
        }
    }
}

function produceTipCalculator(percent){

    return function(tip){
        return tip * percent;
    }
}

function createDriver(){
    let driverId = 0;

    return class Driver{
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}