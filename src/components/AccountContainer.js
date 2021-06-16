import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")

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

  function handleCategory(){
    let newArray = [...transactions]
    setTransactions(newArray.sort((a,b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)))
  }

  function handleDescr(){
    let newArray = [...transactions]
    setTransactions(newArray.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0)))
  }

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(res => res.json())
    .then(data => {
      setTransactions(data)
    })
  }, [])

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
