const leverage = 0.02;

const calculateBalance = ({ balance, profit }) => {
  return balance + profit;
};

const calculateMargin = ({ lot, openPrice }) => {
  return lot * openPrice * leverage;
};

const calculateEquity = ({ balance, credit, profit }) => {
  return balance + credit + profit;
};

const calculateFreeMargin = ({ equity, margin }) => {
  return equity - margin;
};

const calculateMarginLevel = ({ equity, margin }) => {
  return margin !== 0 ? (equity / margin) * 100 : -Infinity;
};

const calculateProfit = ({ equity, balance }) => {
  return equity - balance;
};

export default {
  calculateBalance,
  calculateMargin,
  calculateEquity,
  calculateFreeMargin,
  calculateMarginLevel,
  calculateProfit,
};
