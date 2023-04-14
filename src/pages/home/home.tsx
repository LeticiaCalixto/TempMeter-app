import "./style/style.css";
import Logo from "../../assets/logo.png";
import Table from "./components/table";
import { Button, Col, Row, Card } from "react-bootstrap";
// import RadialChart from "./components/radialChart";

export default function Login() {

  return (
      <div className="container">
        <Card.Body>
          <Row>
            <img className="icon" src={Logo} />
            <h4 className="title">
              <span>Tempmeter</span>
            </h4>
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