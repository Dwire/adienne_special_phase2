import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
  }, [])

  function addNewTrans(newObj){
    // console.log(newObj)
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

  function handleSearch(search){
    console.log(search)
  }

  // function runSearch(search){
  //   console.log(search)
    // let newArray = transactions.filter(trans => trans.toUpperCase().includes(search.toUpperCase()))
    // setTransactions(newArray)
  // }

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm addNewTrans={addNewTrans}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
