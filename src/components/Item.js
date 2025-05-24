import React from "react";
import user from '../img/person-circle.svg'
const Item = ({name,date}) => {
  return (
    <div
      style={{ height: "80px" }}
      className="d-flex align-items-center gap-3 border-bottom py-2 my-2"
    >
      <img src={user} alt="jhj" className="h-100 border border-light rounded-5" />
      <div className="d-flex flex-column justify-content-center gap-1">
        <p className="m-0 text-light fs-5 fw-bold lh-0">{name}</p>
        <p className="m-0 text-light fs-6 fw-light lh-0">{date}</p>
      </div>
    </div>
  );
};

export default Item;
