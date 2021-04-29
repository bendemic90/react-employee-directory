import React, { useState, useEffect } from "react";
//import EmployeeTable from './EmployeeTable'

function Search() {
  const [searchString, setString] = useState("");

  useEffect(() => {

  }, [searchString])

  const handleInputChange = (event) => {
    let value = event.target.value;
    setString(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        onChange={handleInputChange}
        className="form-inline justify-content-center"
      >
        <input
          type="text"
          name="searchString"
          value={searchString}
          placeholder="Search"
          className="form-control"
          onChange={handleInputChange}
        />
      </form>
      <br></br>
    </div>
  );
}

export default Search;
