import { useEffect, useState } from "react";
import { getTemps } from "../../../service/data";
import { ChartLine } from "./chartLine";


interface Table {
  handleSensor: (e: any) => void;
}

export default function Table({ handleSensor }: Table) {

  const [tempSensor1, setTempSensor1] = useState(0);
  const [tempSensor2, setTempSensor2] = useState(0);
  const [tempSensor3, setTempSensor3] = useState(0);

  useEffect(() => {
    getTemps().then((response) => {
      console.log(response)
      setTempSensor1(response[0].temperature)
      setTempSensor2(response[1].temperature)
      setTempSensor3(response[2].temperature)
    })
  })
  
  return (
    <div className="container-fluid">
      <div className="table" style={{ marginTop: 170, marginLeft: 20, height: 500 }}>
        <div className="table-title">Sensor 1</div>
        <div className="temperature"> {tempSensor1} °C</div>
        <button className="button1" onClick={() => handleSensor("Sensor 1")} style={{ marginTop: 400 }}>Mais detalhes</button>
        <div className="chartLineTable1"><ChartLine /></div>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 420, height: 500 }}>
        <div className="table-title">Sensor 2</div>
        <div className="temperature"> {tempSensor2} °C</div>
        <div className="chartLineTable2"><ChartLine /></div>
        <button className="button2" onClick={() => handleSensor("Sensor 2")} style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 820, height: 500 }}>
        <div className="table-title">Sensor 3</div>
        <div className="temperature"> {tempSensor3} °C</div>
        <div className="chartLineTable3"><ChartLine /></div>
        <button className="button3" onClick={() => handleSensor("Sensor 2")} style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>
    </div>
  );
}