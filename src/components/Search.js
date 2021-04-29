import React from "react";

function Search(props) {

  const handleInputChange = (event) => {
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
          value={props.search}
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
