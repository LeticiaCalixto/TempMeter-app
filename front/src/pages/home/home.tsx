import "./style/style.css";
import Logo from "../../assets/logo.png";
import Config from "../../assets/icon-config.png";
import Table from "./components/table";
import { Col, Row, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalConfig from "./components/modalConfig";
import { Line } from "react-chartjs-2";

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

    const data = {
        labels: ["00h", "01h", "02h", "03h", "04h", "05h"],
        datasets: [
            {
                label: "Sensor 1",
                data: [3, 5, 8, 4, 4, 7],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Sensor 2",
                data: [3, 2, 3, 5, 4, 6],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

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

            <div style={{ backgroundColor: "#392F5A" }}>
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
                            <div>
                                <div className="table-title">{sensor}</div>
                                <button type="button" style={{ marginTop: 5, marginRight: 15 }} className="close" onClick={() => handleSensor('')} aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            {/* <Line data={data} /> */}

                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
}