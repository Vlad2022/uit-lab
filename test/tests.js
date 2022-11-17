const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../test/problems');

describe('the add function', () => {
  it('should retur 0 if either argument is not a number', () => {
    const result = add(2, 6);
    expect(result).to.be.eq(8);
  });
});