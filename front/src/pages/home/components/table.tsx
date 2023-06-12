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
    }, []);

    const labels = ['00h', '01h', '02h', '03h', '04h', '05h']

    const dataset1 = {
        label: 'Sensor 1',
        data: [2, 4, 3, 6, 12, 7],
        borderColor: '#FFFF00',
        backgroundColor: '#FFFF00',
    }

    const dataset2 = {
        label: 'Sensor 2',
        data: [15, 13, 9, 18, 13, 10],
        borderColor: '#FF00FF',
        backgroundColor: '#FF00FF',
    }

    const dataset3 = {
        label: 'Sensor 3',
        data: [15, 11, 21, 25, 13, 20],
        borderColor: '#00FFFF',
        backgroundColor: '#00FFFF',
    }

    return (
        <div className="container-fluid">
            <button className="table" onClick={() => handleSensor("Sensor 1")} style={{ marginTop: 170, marginLeft: 20, height: 500 }}>
                <div className="table-title">Sensor 1</div>
                <div className="temperature"> {tempSensor1} °C</div>
                <div className="chartLineTable1"><ChartLine labels={labels} datasets={[dataset1]} /></div>
                <div className="table-text">Clique para mais informações</div>
            </button>

            <div className="table" onClick={() => handleSensor("Sensor 2")} style={{ marginTop: 170, marginLeft: 420, height: 500 }}>
                <div className="table-title">Sensor 2</div>
                <div className="temperature"> {tempSensor2} °C</div>
                <div className="chartLineTable2"><ChartLine labels={labels} datasets={[dataset2]} /></div>
                <div className="table-text">Clique para mais informações</div>
            </div>

            <div className="table" onClick={() => handleSensor("Sensor 3")} style={{ marginTop: 170, marginLeft: 820, height: 500 }}>
                <div className="table-title">Sensor 3</div>
                <div className="temperature"> {tempSensor3} °C</div>
                <div className="chartLineTable3"><ChartLine labels={labels} datasets={[dataset3]} /></div>
                <div className="table-text">Clique para mais informações</div>
            </div>
        </div>
    );
}