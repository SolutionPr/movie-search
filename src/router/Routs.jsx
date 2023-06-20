import React, { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import SearchEngine from "../components/SearchEngine";

export default function Routs() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") navigate("/movie-search");
  }, [location]);

  return useRoutes([
    {
      path: "/",
      children: [{ path: "/movie-search", element: <SearchEngine /> }],
    },
  ]);
}
