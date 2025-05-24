import React from "react";
import Item from "./Item";
import { Row } from "react-bootstrap";

const MainPart = ({parson}) => {
  return (
    <Row style={{ backgroundColor: "#333446" , height:"490px", overflow:"auto"}} className="w-100 p-3">
      {parson.length ? (
        parson.map((item) => {
          return <Item name={item.name} date={item.date} />;
        })
      ) : (
        <h2 className="text-center fw-bold text-light">ليس هناك مواعيد ...!</h2>
      )}
    </Row>
  );
};

export default MainPart;
