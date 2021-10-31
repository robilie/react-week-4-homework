import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the City"
              id="search-text-input"
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-light"
              id="submit-city-button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
