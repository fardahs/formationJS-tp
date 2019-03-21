var assert = require('assert');
var expect = require('chai').expect;
var math = require('../Math');

describe('Math', function() {
   describe('#addition()', function() {
        it('Adding 1 + 2 equals 3', function() {
            expect(math.addition(1,2)).to.equal(3);
         });

         it('Adding 1 + 1 not equals 3', function() {
             expect(math.addition(1,1)).to.not.equal(3);
         });

    });

    describe('#soustraction()', function() {
       it('Sub 2 - 2 equals 0', function() {
          expect(math.soustraction(2,2)).to.equal(0);
       });

       it('Sub 2 - 1 not  equals 0', function() {
           expect(math.soustraction(2,1)).to.not.equal(0);
         });

     });
describe('#mutiplication()', function() {
       it('Multiply 2 * 2 equals 4', function() {
          expect(math.mutiplication(2,2)).to.equal(4);
       });

       it('Multiply 2 * 1 not equals 0', function() {
           expect(math.mutiplication(2,1)).to.not.equal(0);
         });

     });

 });
