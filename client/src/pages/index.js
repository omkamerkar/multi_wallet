import React, { useEffect, useState } from 'react';
import useMetaMask from '../hooks/useMetaMask';
import multiSigWallet from '../utils/multiSigWallet';

export default function Dashboard() {
  const { account } = useMetaMask();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the MultiSigWallet contract
    const loadTransactions = async () => {
      const txCount = await multiSigWallet.methods.getTransactionCount(true, false).call();
      const txs = [];
      for (let i = 0; i < txCount; i++) {
        const tx = await multiSigWallet.methods.transactions(i).call();
        txs.push(tx);
      }
      setTransactions(txs);
    };

    loadTransactions();
  }, []);

  return (
    <div>
      <h1>MultiSig Wallet Dashboard</h1>
      <p>Connected Account: {account}</p>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            Destination: {tx.destination}, Value: {tx.value} wei, Executed: {tx.executed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}
