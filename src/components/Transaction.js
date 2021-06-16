import React from "react";

function Transaction({ row, deleteTrans }) {

  function handleDelete(){
    deleteTrans(row.id)
  }

  return (
    <tr>
      <td>{row.date}</td>
      <td>{row.description}</td>
      <td>{row.category}</td>
      <td>{row.amount}</td>
      <td>
        <button onClick={handleDelete}>DELETE</button>
      </td>
    </tr>
  );
}

export default Transaction;
