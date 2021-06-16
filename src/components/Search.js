import React, { useState } from "react";

function Search({ handleSearch }) {

  const [search, setSearch] = useState("")

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  // function handleSearch(){
  //   runSearch(search)
  // }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        // onChange={() => console.log("Searching...")}
        onChange={handleChange}
      />
      <i className="circular search link icon" onClick={handleSearch(search)}></i>
    </div>
  );
}

export default Search;
