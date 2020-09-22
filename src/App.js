import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance.js';
import Income from './components/Income.js';
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';


import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance/>
      <Income/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
