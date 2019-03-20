function produceDrivingRange(blockRange) {
    return function (triprange1, triprange2) {
      let range = parseInt(triprange2) - parseInt(triprange1)
  
      if (range < blockRange) {
        return `within range by ${blockRange - range}`
      } else {
        return `${range - blockRange} blocks out of range`
      }
    }
  }

function produceTipCalculator(percentage){
    return function(total){
        return total*percentage
    }


}

function createDriver(){
    let driverId = 0
    return class {
      constructor(name){
        this.id = ++driverId
        this.name = name
      }
    }
  } 
