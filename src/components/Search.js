import React, { useState } from "react";

function Search({ runSearch, search }) {

  const handleChange = (e) =>{
    runSearch(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
