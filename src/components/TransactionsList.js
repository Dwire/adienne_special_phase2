import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteTrans }) {

  const displayTrans = transactions.map(row => <Transaction key={row.id} row={row} deleteTrans={deleteTrans}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {displayTrans}
      </tbody>
    </table>
  );
}

export default TransactionsList;
