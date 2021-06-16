import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
  }, [])

  function addNewTrans(newObj){
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      let newArray = [...transactions, data]
      setTransactions(newArray)
    })
  }

  function runSearch(search){
    setSearch(search)
  }

  let filtered = transactions.filter(trans => trans.description.toUpperCase().includes(search.toUpperCase()))

  return (
    <div>
      <Search runSearch={runSearch} search={search}/>
      <AddTransactionForm addNewTrans={addNewTrans}/>
      <TransactionsList transactions={filtered}/>
    </div>
  );
}

export default AccountContainer;
