const assert = require('assert');
const Math = require('../src/math.js');

const expect = require('chai').expect; 

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


    //tests using Chai
    it('Sum two numbers with "Chai"', function () {
        const math = new Math();
        
        expect(math.sum(5, 5)).to.equal(10);
    })

    it('Testing obj', function () {
        const obj = {
            name: "Rafael Bertolim Pavanello",
            age: "24yo"
        }; 
        const obj2 = {
            name: "Rafael Bertolim Pavanello",
            age: "24yo"
        };     
        
        expect(obj).to.have.property('name').equal("Rafael Bertolim Pavanello");
        expect(obj).to.deep.equal(obj2); //comparing two objects.
    })
})


