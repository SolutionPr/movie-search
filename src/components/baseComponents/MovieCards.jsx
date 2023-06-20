import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function MovieCards({ data, fetchDataOnScroll, loading }) {
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => fetchDataOnScroll()}
      hasMore={true}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="card-container">
        <div className="d-flex flex-wrap align-content-center justify-content-center flex-gap-20">
          {data.map((item) => {
            return (
              <div className="card" style={{ width: "14rem", height: "24rem" }}>
                <div
                  style={{
                    backgroundImage: `url(${
                      item.Poster !== "N/A" ? item.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    })`,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <h6 className="card-text">Year : {item.Year}</h6>
                  <button className="btn btn-outline-primary">Watch Now</button>
                </div>
              </div>
            );
          })}
        </div>
        {loading && <Spinner />}
      </div>
    </InfiniteScroll>
  );
}
