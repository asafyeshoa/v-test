import pnlState from "./actions/pnlActions.js";

describe("Pnl with state", () => {
  let state;

  beforeEach(() => {
    pnlState.openNewPosition()
    state = pnlState.pnlData.value; 
  });

  it("calculateBalance updates balance correctly", () => {
    pnlState.calculateBalance({ profit: 50 });
    expect(state.balance).toBe(1050);
  });

  it("calculateEquity updates equity correctly", () => {
    pnlState.calculateEquity();
    expect(state.equity).toBe(state.balance + state.credit);
  });

  it("calculateFreeMargin updates freeMargin correctly", () => {
    pnlState.calculateFreeMargin();
    const expectedFreeMargin = state.equity - state.margin;
    expect(state.freeMargin).toBe(expectedFreeMargin);
  });

  it("calculateMarginLevel updates marginLevel correctly", () => {
    pnlState.calculateMarginLevel();
    expect(state.marginLevel).toBe(state.margin !== 0 ? (state.equity / state.margin) * 100 : 0);
  });

  it("calculateProfit updates profit correctly", () => {
    pnlState.calculateProfit({ equity: 1100, balance: 1000, profit: 0 });
    const expectedProfit = state.equity - state.balance;
    expect(state.profit).toBe(expectedProfit);
  });

});
