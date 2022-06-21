import React, { useContext } from "react";
import { Number } from "../App.js";
import { Name } from "../App.js";

const Context = () => {
  const count = useContext(Number);
  const name = useContext(Name);

  return (
    <div style={{ border: "solid 1px" }}>
      Context
      <br />
      {count}
      <br />
      {name}
    </div>
  );
};

export default Context;
