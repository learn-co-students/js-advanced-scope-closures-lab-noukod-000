function produceDrivingRange(blockRange){
  return function(startingBlock,endingBlock){
      startingBlock=parseInt(startingBlock.replace(/[a-zA-Z]/g,""));
      endingBlock=parseInt(endingBlock.replace(/[a-zA-Z]/g,""));
      const distanceBetweenBlocks=Math.abs(startingBlock-endingBlock);
      if (distanceBetweenBlocks>blockRange){
        return `${distanceBetweenBlocks-blockRange} blocks out of range`;
      }else{
        return `within range by ${blockRange-distanceBetweenBlocks}`
      }
  }
}

function produceTipCalculator(tipPercentage){
  return function(price){
    return price*tipPercentage;
  }
}
