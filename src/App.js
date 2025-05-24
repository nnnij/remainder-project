import { Container, Row } from "react-bootstrap";
import HeadPart from "./components/HeadPart";
import MainPart from "./components/MainPart";
import FooterPart from "./components/FooterPart";
import {parson} from './Data/Data'
import { useState } from "react";
function App() {

  const [data , setData] = useState(parson)

  const oDelete=()=>{
    setData([])
  }

  const onShow=()=>{
    setData(parson)
  }

  return (
    <Container className="d-flex flex-column my-5 w-100 h-100 justify-content-center align-items-center">
      <HeadPart parson={data} />
      <MainPart parson={data} />
      <FooterPart oDelete={oDelete} onShow={onShow} />
    </Container>
  );
}

export default App;
