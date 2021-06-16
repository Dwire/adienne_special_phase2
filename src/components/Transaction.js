import React from "react";

function Transaction({ row }) {
  return (
    <tr>
      <td>{row.date}</td>
      <td>{row.description}</td>
      <td>{row.category}</td>
      <td>{row.amount}</td>
    </tr>
  );
}

export default Transaction;
