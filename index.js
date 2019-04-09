function produceDrivingRange(range){
  return function(first, second){
      const distance = parseInt(second) - parseInt(first);
      if(distance > range){
          return `${distance - range} blocks out of range`;
      }else{
          return `within range by ${range - distance}`;
      }
  }
}

function produceTipCalculator(percent){

    return function(fare){
        return fare * percent;
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
