import "./style/style.css";
import Logo from "../../assets/logo.png";
import Config from "../../assets/icon-config.png";
import Table from "./components/table";
import { Col, Row, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalConfig from "./components/modalConfig";
// import RadialChart from "./components/radialChart";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#FFF'
                }
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: ['1', '7', '9', '5', '2'],
                borderColor: '#FFFF00',
                backgroundColor: '#FFFF00',
            },
            {
                label: 'Dataset 2',
                data: ['7', '3', '4', '5', '4'],
                borderColor: '#FF00FF',
                backgroundColor: '#FF00FF',
            },
        ],
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
                            <div>
                                <div className="table-title">{sensor}</div>
                                <button type="button" style={{ marginTop: 5, marginRight: 15 }} className="close" onClick={() => handleSensor('')} aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>

                                    <div className="chartLine">
                                        <Line options={options} data={data} />
                                    </div>

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