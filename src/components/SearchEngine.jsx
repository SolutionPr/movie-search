import React, { useEffect, useState } from "react";
import { searchMovies } from "../healpers/SearchMovie";
import MovieCards from "./baseComponents/MovieCards";
import SearchForm from "./baseComponents/SearchForm";
import Navbar from "./baseComponents/Navbar";
import { toast } from "react-toastify";
import Loader from "./baseComponents/Loader";
import Header from "./baseComponents/Header";

export default function SearchEngine() {
  //----------------------------------------------React Hooks------------------------------------------------

  const [loading, setLoading] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [Value, setValue] = useState({ title: "", type: "", errorMessage: "" });
  const [data, setData] = useState({ data: [], page: 1, isLoading: false });

  //----------------------------------------------Search Handler---------------------------------------------

  const handleClickSearch = async (values, newSearch) => {
    const { title, type, year } = values;
    if (newSearch && title && type) {
      setData((prevValue) => ({ ...prevValue, isLoading: true }));
      const { result, message } = await searchMovies(title?.trim(), type?.trim(), year?.trim(), 1, setLoading);
      if (message) toast.error(message);
      setData(() => ({ data: [...result], page: 2, isLoading: false }));
      setTimeout(() => {
        window.scrollTo(0, 930);
      }, 100);
    } else {
      const { result } = await searchMovies(title?.trim(), type?.trim(), year?.trim(), data.page, setLoading);
      setData((prevValue) => ({ data: [...prevValue.data, ...result], page: prevValue.page + 1 }));
    }
  };

  //----------------------------------------------Input Values Handler---------------------------------------

  const handleChange = (value, inputType) => {
    switch (inputType) {
      case "title":
        setValue((prevValue) => ({ ...prevValue, title: value, errorMessage: "" }));
        break;
      case "type":
        setValue((prevValue) => ({ ...prevValue, type: value, errorMessage: "" }));
        break;
      case "year":
        setValue((prevValue) => ({ ...prevValue, year: value, errorMessage: "" }));
        break;
      default:
        setValue({});
        break;
    }
  };

  //----------------------------------------------Select Type Handler----------------------------------------

  const handleSelect = (e) => {
    const target = e.target;
    const value = Object.keys(e.target)[1];
    handleChange(target[value].children, "type");
  };

  //----------------------------------------------Show Navbar On Scroll--------------------------------------

  const handleScroll = async () => {
    const scrollPosition = window.pageYOffset;
    const triggerPosition = 900;

    setShowNavbar(scrollPosition > triggerPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //----------------------------------------------Fetch Data On Scroll---------------------------------------

  const fetchDataOnScroll = () => {
    handleClickSearch(Value);
  };

  //---------------------------------------------------------------------------------------------------------

  return (
    <>
      {data.isLoading && <Loader />}
      <Header />
      <SearchForm handleChange={handleChange} handleClickSearch={handleClickSearch} setValue={setValue} handleSelect={handleSelect} Value={Value} />
      {showNavbar && <Navbar handleChange={handleChange} handleClickSearch={handleClickSearch} handleSelect={handleSelect} Value={Value} />}
      {data.data.length > 0 && <MovieCards data={data.data} fetchDataOnScroll={fetchDataOnScroll} loading={loading} />}
    </>
  );
}
