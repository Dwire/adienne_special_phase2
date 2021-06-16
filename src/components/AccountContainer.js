import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

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

  function deleteTrans(id){
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(removeTrans(id))
  }

  function removeTrans(id){
    const newArray = transactions.filter(single => single.id !== parseInt(id))
    setTransactions(newArray)
  }

  handleCategory(){
    //sort alphabetically by category
  }

  handleDescr(){
    //sort alpha by description
  }

  return (
    <div>
      <Search runSearch={runSearch} search={search}/>
      <AddTransactionForm addNewTrans={addNewTrans}/>
      <Sort handleCategory={handleCategory} handleDescr={handleDescr}/>
      <TransactionsList transactions={filtered} deleteTrans={deleteTrans}/>
    </div>
  );
}

export default AccountContainer;
