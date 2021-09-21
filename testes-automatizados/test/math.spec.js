const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math();

        assert.equal(math.sum(5, 5), 10);
    })

    //Test assync
    it('Multiply two numbers', function (done) {
        const math = new Math();
        this.timeout(3000); //change timeout value to async tests

        math.multiply(5, 5, value => {
            assert.equal(value, 25);
            done();
        })
        
    })

    it('Future test');

    //it.only(); //Only one test
    // /it.skip(); //Skip test
})