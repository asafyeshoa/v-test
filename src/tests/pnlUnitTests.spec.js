import pnlLogic from "../components/actions/pnlLogic.js";

describe('PnlLogic actions ', () => {
  describe('calculateBalance', () => {
    test.each([
      [{ balance: 1000, profit: 200 }, 1200],
      [{ balance: 500, profit: -100 }, 400],
    ])('When balance is %p and profit is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateBalance(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('calculateMargin', () => {
    test.each([
      [{ lot: 5, openPrice: 50 }, 5 * 50 * 0.02],
      [{ lot: 3, openPrice: 40 }, 3 * 40 * 0.02],
    ])('When lot is %p and openPrice is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateMargin(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('calculateEquity', () => {
    test.each([
      [{ balance: 1000, credit: 500, profit: 200 }, 1700],
      [{ balance: 500, credit: 200, profit: -100 }, 600],
    ])('When balance is %p, credit is %p, and profit is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateEquity(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('calculateFreeMargin', () => {
    test.each([
      [{ equity: 1700, margin: 100 }, 1600],
      [{ equity: 600, margin: 50 }, 550],
    ])('When equity is %p and margin is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateFreeMargin(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('calculateMarginLevel', () => {
    test.each([
      [{ equity: 1700, margin: 100 }, 1700 / 100 * 100],
      [{ equity: 600, margin: 0 }, -Infinity],
    ])('When equity is %p and margin is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateMarginLevel(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('calculateProfit', () => {
    test.each([
      [{ equity: 1700, balance: 1000 }, 700],
      [{ equity: 600, balance: 500 }, 100],
    ])('When equity is %p and balance is %p, should return %p', (input, expected) => {
      // Arrange & Act
      const result = pnlLogic.calculateProfit(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
