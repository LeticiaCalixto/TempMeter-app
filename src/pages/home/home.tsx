import "./style/style.css";
import Logo from "../../assets/logo.png";
import Config from "../../assets/icon-config.png";
import Table from "./components/table";
import { Col, Row, Card } from "react-bootstrap";
import { useState } from "react";
import ModalConfig from "./components/modalConfig";
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
            <button type="button" className="btn" style={{ backgroundColor: "transparent", width: 70 }} data-toggle="modal" data-target="#ModalConfig">
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

      <div className="modal fade" id="ModalConfig" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Configurações</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex align-items-center flex-column">
                <button type="button" className="btn btn-light mb-3" data-dismiss="modal">Adicionar Sensor</button>

                <button type="button" className="btn btn-light mb-3" data-dismiss="modal">Remover Sensor</button>

                <button type="button" className="btn btn-light" data-dismiss="modal">Editar Sensor</button>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalConfig openModal={openModal} handleModal={handleModal} /> */}

    </div>
  );
}