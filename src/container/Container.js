import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
