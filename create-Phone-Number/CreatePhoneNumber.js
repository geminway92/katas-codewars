function createPhoneNumber(numberString){
  return `(${numberString.slice(0,3).join('')}) ${numberString.slice(3,6).join('')}-${numberString.slice(6,10).join('')}`
};

module.exports = createPhoneNumber;
