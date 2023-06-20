import React from "react";

export default function Navbar(props) {
  const { handleChange, handleClickSearch, handleSelect, Value } = props;

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#2b5871" }}>
      <div className="container-fluid">
        <h4 className="mr-2 text-light" style={{ marginRight: "20px" }}>
          Search Movie
        </h4>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">|||</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-gap">
            <li className="nav-item">
              <input
                className="form-control me-2 border-0 input-background"
                placeholder="Movie Title"
                value={Value.title || ""}
                onChange={(evt) => handleChange(evt.target.value, "title")}
              />
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {Value.type ? Value.type : "Select a type"}
              </span>
              <ul className="dropdown-menu form-dropdown-menu" aria-labelledby="navbarDropdown" onClick={(e) => handleSelect(e)}>
                <li className="w-100">
                  <span className="dropdown-item d-flex align-item-center justify-content-center">Movie</span>
                </li>
                <li className="w-100">
                  <span className="dropdown-item d-flex align-item-center justify-content-center">Series</span>
                </li>
                <li className="w-100">
                  <span className="dropdown-item d-flex align-item-center justify-content-center">Episode</span>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <input
                id="BPM"
                className="form-control me-2 border-0 input-background"
                placeholder="Movie Year"
                value={Value.year || ""}
                onChange={(evt) => handleChange(evt.target.value, "year")}
              />
            </li>
          </ul>

          <button className="btn btn-outline-primary text-light" onClick={() => handleClickSearch(Value, true)}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
