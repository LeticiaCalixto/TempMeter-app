import "./style/style.css";
import Logo from "../../assets/logo.png";
import Config from "../../assets/icon-config.png";
import Table from "./components/table";
import { Col, Row, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalConfig from "./components/modalConfig";
// import RadialChart from "./components/radialChart";

export default function Login() {

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = (e: boolean) => setOpenModal(e)
  const [sensor, setSensor] = useState<string>('')

  const handleSensor = async (e: any) => {
    setSensor(e)
  }

  const handleOpenModal = async () => {
    console.log('openModal', openModal)
    handleModal(true)
  }

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#392F5A" }}>
        <Card.Body>
          <Row>
            <img className="icon" src={Logo} />
            <h4 className="title">
              <span>Tempmeter</span>
            </h4>
            <div className="button-config">
              <button type="button" className="btn" style={{ backgroundColor: "transparent", width: 70 }} data-toggle="modal" data-target="#ModalConfig">
                <img className="icon-config" src={Config} />
              </button>
            </div>
          </Row>

          <ModalConfig openModal={openModal} handleModal={handleModal} />

        </Card.Body>
      </div>

      <div>
        {sensor === '' ? (
          <Row>
            <Col>
              <Table
                handleSensor={handleSensor}
              />
            </Col>
          </Row>
        ) : (
          <div>
            <div className="table" style={{ marginTop: 170, marginLeft: "12%", height: 500, width: "75%" }}>
              <div className="table-title">{sensor}</div>


              <div style={{ marginRight: 5, marginTop: 5}}>
                  <button type="button" className="close" onClick={() => handleSensor('')} aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
            </div>
          </div>
        )
        }
      </div>
    </>
  );
}