import React from "react";

const Buttton = (props) => {
  const btnClass = props.className;

  return <button className={`${btnClass}`}>{props.children}</button>;
};

export default Buttton;
