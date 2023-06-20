const apiKey = "eaa6e460";
export const searchMovies = async (title, type, year, pageNumber, setLoading) => {
  // API endpoint and parameters
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title || ""}&type=${type || ""}&y=${year || ""}&page=${pageNumber}`;

  // Send a GET request to the API
  let result = [];
  let message = "";
  setLoading(true);
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        // Movie details
        result = data.Search;
      } else {
        message = data.Error;
      }
    })
    .catch((error) => {
      message = error;
      console.log("Error:", error);
    });
  setLoading(false);

  return { result, message };
};
