import React from "react";

const Entry = (props) => {
  return (
    <div className="entry">
      <h1>Account # {props.index}</h1>
      <h3>
        Email: <span>{props.email}</span>
      </h3>
      <h3>
        Password: <span>{props.password}</span>
      </h3>
    </div>
  );
};

export default Entry;
