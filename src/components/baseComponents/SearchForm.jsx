import React from "react";

export default function SearchForm(props) {
  const { handleChange, handleClickSearch, Value, setValue, handleSelect } = props;

  const handleValidate = (values) => {
    if (!values.title) {
      setValue((prevValue) => ({ ...prevValue, errorMessage: "movie title" }));
    } else if (!values.type) {
      setValue((prevValue) => ({ ...prevValue, errorMessage: "type" }));
    } else {
      handleClickSearch(Value, true);
    }
  };

  return (
    <section className="form-custom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-width">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-box">
                    <h4 className="color-primary">Search Movie</h4>
                    <div>
                      <label htmlFor="songStory" className={Value.errorMessage === "movie title" ? "text-danger" : ""}>
                        {Value.errorMessage === "movie title" ? "Please fill a movie title" : "Enter a (Movie, Series, Episode) title"}
                      </label>
                      <input
                        type="text"
                        className={Value.errorMessage === "movie title" ? "error" : ""}
                        placeholder={"Movie Title"}
                        value={Value.title || ""}
                        onChange={(evt) => handleChange(evt.target.value, "title")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <div>
                      <label htmlFor="moodGenre" className={Value.errorMessage === "type" ? "text-danger" : ""}>
                        {Value.errorMessage === "type" ? "Please select a type" : "Select a type (Movie, Series, Episode)"}
                      </label>
                      <ul className="form-dropdown">
                        <li className="nav-item dropdown">
                          <span
                            className="nav-link dropdown-toggle text-dark"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ minWidth: "157px" }}
                          >
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <div>
                      <label htmlFor="BPM">Enter the year</label>
                      <input
                        type="text"
                        id="BPM"
                        placeholder="Optional..."
                        value={Value.year || ""}
                        onChange={(evt) => handleChange(evt.target.value, "year")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="button" onClick={() => handleValidate(Value)}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
