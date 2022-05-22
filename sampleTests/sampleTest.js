const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const KMS_PER_MILE = 1.60934;


describe('function milesToKilometers',  () => {
  it('function milesToKilometers should be declared',  () => {
    assert.isFunction(milesToKilometers);
  });
  
  it('should have one parameter: "miles"',  () => {
    assert.equal( 
      milesToKilometers.length, 
      1, 
      'function declaration should have one parameter: "miles" \n \n'
    );
  });

  it('should return a number',  () => {
    assert.isNumber( 
      milesToKilometers(100), 
      "return value of a function should be a number \n \n"
    );
  });
  
  it('should convert the miles to kilometers using a conversion rate, 1 mile = 1.60934 km',  () => {
    const arg1 = 1000000;
    const expectedResult = arg1 * KMS_PER_MILE;
    
    assert.equal( 
      milesToKilometers(arg1), 
      expectedResult, 
      "function should convert the miles to kilometers using a conversion rate, 1 mile = 1.60934 km' \nand return the number of kilometers \n \n"
    );
  });

  it('should return number 1.60934 , when "miles" argument is not provided',  () => {
    
    assert.equal( 
      milesToKilometers(), 
      KMS_PER_MILE, 
      'function should check if "miles" argument is undefined \nand if so return number 1.60934.\n \n'
    );
  });

});