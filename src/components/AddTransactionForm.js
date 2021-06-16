import React, { useState } from "react";

function AddTransactionForm({ addNewTrans }) {

  const [date, setDate] = useState("")
  const [descr, setDescr] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleDate = (e) =>{
    setDate(e.target.value)
  }
  const handleDescr = (e) =>{
    setDescr(e.target.value)
  }
  const handleCategory = (e) =>{
    setCategory(e.target.value)
  }
  const handleAmount = (e) =>{
    setAmount(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    let newTrans = {
      date: date,
      description: descr,
      category: category,
      amount: amount
    }
    addNewTrans(newTrans)
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleDate}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={descr}
            onChange={handleDescr}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={handleCategory}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
