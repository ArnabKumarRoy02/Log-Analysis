import React from "react";

const PageName = (props) => {
  return (
    <div className="w-100 pb-5 text-center">
      <h1 className="text-dark">{props.name}</h1>
    </div>
  );
};

export default PageName;
