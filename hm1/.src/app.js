function getPercents(percent, number) {
    const result = (percent / 100) * number;

    if (typeof number != 'number'){
        return `не можем посчитать проценты от '${number}'`
    }else if(typeof percent != 'number'){
        return `не можем посчитать проценты от '${percent}'`
    }else{
        return result;
    }

  }
  
  const percent = 20;
  const number = 100;
  
  const result = getPercents(percent, number);
  console.log(result);

  module.exports = getPercents