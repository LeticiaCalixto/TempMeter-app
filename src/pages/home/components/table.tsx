
export default function Table() {
  return (
    <div className="container-fluid">
      <div className="table" style={{ marginTop: 170, marginLeft: 20, height: 500 }}>
        <div className="table-title">Sensor 1</div>
        {/* <div id="chart"></div> */}
        <button className="button" style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 420, height: 500 }}>
        <div className="table-title">Sensor 2</div>
        <button className="button" style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 820, height: 500 }}>
        <div className="table-title">Sensor 3</div>
        <button className="button" style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>
    </div>
  );
}