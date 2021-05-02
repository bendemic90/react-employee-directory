import React from "react";

function Search(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        onChange={props.onChange}
        className="form-inline justify-content-center"
      >
        <input
          type="text"
          name="search"
          value={props.search}
          placeholder="Search first or last name"
          className="form-control"
        />
      </form>
      <br></br>
    </div>
  );
}

export default Search;
