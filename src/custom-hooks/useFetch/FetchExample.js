import React from "react";
import useFetch from "./useFetch";

const FetchExample = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <div className="use-fetch-example">
        {error && <div className="error-message">{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {data && data.length > 0 && (
          <div className="card-wrapper">
            {data.map((post) => (
              <div key={post.id} className="card">
                <div className="card-inner">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
