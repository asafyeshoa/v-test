<template>
    <div class="pnl-container">
      <h1>PnL Data</h1>
      <button class="open-position-button" @click="openNewPosition">Open New Position</button>

      <div class="pnl-table">
        <table>
          <thead>
            <tr>
              <th class="text-center">Balance</th>
              <th class="text-center">Equity</th>
              <th class="text-center">Credit</th>
              <th class="text-center">Margin</th>
              <th class="text-center">Free Margin</th>
              <th class="text-center">Margin Level</th>
              <th class="text-center">Profit</th>
            </tr>
          </thead>
          <tbody>
          <tr class="text-center">
            <td>{{ pnlData.balance?.toFixed(2) }} USD</td>
            <td>{{ pnlData.equity?.toFixed(2) }} USD</td>
            <td>{{ pnlData.credit?.toFixed(2) }} USD</td>
            <td>{{ pnlData.margin?.toFixed(2) }} USD</td>
            <td>{{ pnlData.freeMargin?.toFixed(2) }} USD</td>
            <td>{{ pnlData.marginLevel.toFixed(2) }} %</td>
            <td>{{ pnlData.profit?.toFixed(2) }} USD</td>
          </tr>
        </tbody>
          <tfoot v-if="openPosition.length > 0">
          <tr>
            <td colspan="7">
              <table class="nested-table" >
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Symbol</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Lot</th>
                    <th>Open Price</th>
                    <th>Stop Loss</th>
                    <th>Take Profit</th>
                    <th>Current Price</th>
                    <th>Profit</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="position in openPosition" :key="position.ticket">
                    <td>{{ position.ticket }}</td>
                    <td>{{ position.symbol }}</td>
                    <td>{{ position.time }}</td>
                    <td>{{ position.type }}</td>
                    <td>{{ position.lot }}</td>
                    <td>{{ position.openPrice }}</td>
                    <td>{{ position.stopLoss }}</td>
                    <td>{{ position.takeProfit }}</td>
                    <td>{{ position.currentPrice }}</td>
                    <td>{{ position.profit }}</td>
                    <td>
                      <button class="v-btn" @click="closePosition(position.ticket)">Close</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tfoot>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import pnlActions from './actions/pnlActions.js';
  import actions from './actions/index.js';
  const  { pnlData, openPosition, openNewPosition, closePosition } = pnlActions
  
  onMounted(() => {
    console.log(actions)
  });
  
  </script>
  
  
  <style scoped>
  .pnl-container {
    width: 1000px;
    height: 90%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-bottom: 100px;
  }
  
  .pnl-container h1 {
    margin: 0;
  }
  
  .refresh-button {
    cursor: pointer;
    padding: 8px 15px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
  }
  
  .refresh-button:hover {
    background-color: #0056b3;
  }
  
  .pnl-table {
    margin-top: 20px;
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table,
  th,
  td {
    border: 1px solid #ddd;
  }
  
  th,
  td {
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  