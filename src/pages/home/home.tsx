import "./style/style.css";
import Logo from "../../assets/logo.png";
import Config from "../../assets/icon-config.png";
import Table from "./components/table";
import { Col, Row, Card } from "react-bootstrap";
import { useState } from "react";
// import RadialChart from "./components/radialChart";

export default function Login() {

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = (e: boolean) => setOpenModal(e)

  const handleOpenModal = async () => {
    console.log('openModal', openModal)
    handleModal(true)
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "#392F5A" }}>
      <Card.Body>
      <Row>
          <img className="icon" src={Logo} />
          <h4 className="title">
            <span>Tempmeter</span>
          </h4>
          <div className="button-config">
            <button type="button" className="btn" style={{backgroundColor: "transparent", width: 70}} data-toggle="modal" data-target="#ModalConfig">
              <img className="icon-config" src={Config} />
            </button>
          </div>
        </Row>

        <Row>
          <Col>
            <Table />
          </Col>
        </Row>
      </Card.Body>
        

    </div>
  );
}