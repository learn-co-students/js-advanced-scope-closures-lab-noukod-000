function produceDrivingRange (blockRange) {
  return function(blockOne, blockTwo) {
    let difference = parseInt(blockOne) - parseInt(blockTwo);
    absDifference = Math.abs(difference);
    if (absDifference <= blockRange) {
      return `within range by ${absDifference}`
    } else {
      return `${absDifference - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator (tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}

function createDriver () {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
