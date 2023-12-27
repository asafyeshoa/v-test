import { ref, toRefs } from 'vue';

const pnlData = ref({
  balance: 1000,
  equity: 10000 + 1000,
  credit: 10000,
  margin: 0,
  freeMargin: 0,
  marginLevel: 0,
  profit: 0,
});

const leverage = 100;
const contractSize = 150;
const openPosition = ref([]);

const closePosition = (ticket) => {
  const filteredPosition = openPosition.value.find(position => position.ticket === ticket);
  openPosition.value = openPosition.value.filter(position => position.ticket !== ticket);
  calculateProfit(filteredPosition);
  calculateBalance(filteredPosition);
  updateMetrics(filteredPosition);
};

const updateMetrics = (newPosition) => {
  calculateFreeMargin();
  calculateMarginLevel();
  calculateMargin();
  calculateEquity();
  checkPriceChange(newPosition);
};

const calculateMargin = () => {
  // Sum up the margins of all open positions
  pnlData.value.margin = openPosition.value.length > 0 ?
    openPosition.value.reduce((totalMargin, position) => {
      // Calculate margin for the position (you need to replace this with your actual margin calculation logic)
      const positionMargin = (position.lot * position.openPrice * contractSize) / leverage;
      // Sum up the margins
      return totalMargin + positionMargin;
    }, 0) :
    0;
};

const openNewPosition = () => {
  const newPosition = {
    ticket: Math.floor(Math.random() * 90000000) + 10000000,
    symbol: ['BTCUSD', 'XAUUSD', 'TESLA'][Math.floor(Math.random() * 3)],
    time: new Date().toISOString(),
    type: ['Buy', 'Sell'][Math.floor(Math.random() * 2)],
    lot: 7.5,
    openPrice: parseFloat((Math.random() * (1.20000 - 1.00000) + 1.00000).toFixed(2)),
    stopLoss: 50,
    takeProfit: 200,
    currentPrice: parseFloat((Math.random() * (1.20000 - 1.00000) + 1.00000).toFixed(2)),
    profit: 1,
  };

  // Set the initial price when opening a new position
  newPosition.initialPrice = newPosition.openPrice;

  updateMetrics(newPosition);

  openPosition.value.push(newPosition);
};

const calculateBalance = (newPosition) => {
  pnlData.value.balance += newPosition.profit;
};

const calculateEquity = () => {
  pnlData.value.equity = pnlData.value.balance + pnlData.value.credit;
};

const calculateFreeMargin = () => {
  pnlData.value.freeMargin = openPosition.value.length > 0 ? pnlData.value.equity - pnlData.value.margin : 0;
};

const calculateMarginLevel = () => {
  const equity = pnlData.value.equity;
  const margin = pnlData.value.margin;

  // Avoid division by zero
  pnlData.value.marginLevel = openPosition.value.length > 0 ? (equity / margin) * 100 : 0;
};

const calculateProfit = (newPosition) => {
  pnlData.value.profit = pnlData.value.equity - pnlData.value.balance + newPosition.profit;
};

const checkPriceChange = (position) => {
  // Check if the current price has changed by more than 10%
  const priceChangePercentage = Math.abs((position.currentPrice - position.initialPrice) / position.initialPrice) * 100;

  if (priceChangePercentage > 10) {
    // console.log(`Position with ticket ${position.ticket} has changed more than 10%. Triggering action...`);
    // Add your logic here to handle the price change, such as closing the position or taking other actions
  }
};

const simulatePriceChanges = () => {
  openPosition.value.forEach((position) => {
    // Simulate a random price change between -5% and +5%
    const priceChange = (Math.random() * 10 - 5) / 100;
    position.currentPrice = parseFloat((position.currentPrice * (1 + priceChange)).toFixed(2));

    // Calculate the new profit based on the price change
    let profitChange;

    if (position.type === 'Buy') {
      profitChange = (position.currentPrice - position.openPrice) * position.lot * contractSize;
    } else if (position.type === 'Sell') {
      profitChange = (position.openPrice - position.currentPrice) * position.lot * contractSize;
    }

    position.profit = parseFloat((position.profit + profitChange).toFixed(2));
  });

  // Trigger metrics update after simulating price changes for all positions
  openPosition.value.forEach((position) => {
    updateMetrics(position);
  });
};

setInterval(simulatePriceChanges, 200);

export default { pnlData, openPosition, closePosition, openNewPosition, toRefs, simulatePriceChanges, calculateBalance, calculateMargin, calculateEquity, calculateFreeMargin, calculateMarginLevel, calculateProfit };