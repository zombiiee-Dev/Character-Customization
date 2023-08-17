import React from "react";

function Header({ title, subcrise }) {
  return (
    <>
      <div className="title">{title}</div>
      <div className="subtitle">{subcrise}</div>
      <div className="divider"></div>
    </>
  );
}

export default Header;
