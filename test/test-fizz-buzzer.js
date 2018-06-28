
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {



it('should return fizz, buzz, or fizzbuzz if number can be factored'
 +' by 3, 5, or 15 respectively, return number otherwise', function() {
    const normalCases = [
        {num: 6, expected: 'fizz'},
      {num: 10, expected: 'buzz'},
      {num: 45,  expected: 'fizz-buzz'},
      {num: 4, expected: 4}
    ];

    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.num);
        expect(answer).to.equal(input.expected);
      });
    });

    it('should raise error if incorrect input', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [
          ['a'],
          ['cc'],
          ['fish']
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input);
          }).to.throw(Error);
        });
      });
    });