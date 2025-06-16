//math.spec.js

const math = require('../src/math');
const { test, expect } = require('@playwright/test');
const {qase} = require('playwright-qase-reporter')
 

test.describe('Math module', () => {
  test('should correctly add two numbers', () => {
   qase.id(9)
    expect(math.add(2, 3)).toBe(5);
  });

  test('should correctly subtract two numbers', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });
  test('[Failed Step Demo]Addition with steps', async () => {
    await test.step('Start by Adding Number 1', async () => {
      expect(true).toBe(true);
    });
    await test.step('Add another Number 2', async () => {
      expect(true).toBe(true);
    });
    await test.step('Resulting Number should be 3', async () => {
      expect(math.add(1,2)).toBe(3);
    });
    expect(true).toBe(true);
  });

});
