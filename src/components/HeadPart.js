import React from "react";
import { Row } from "react-bootstrap";
const HeadPart = ({parson}) => {
  return (
    <Row
      style={{ backgroundColor: "#7F8CAA" }}
      className="w-100 p-2 text-light fs-5 fw-bold rounded-top-2 text-center "
    >
      <div className="text-center">لديك اليوم {parson.length} مواعيد</div>
    </Row>
  );
};

export default HeadPart;
