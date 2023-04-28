import ApexCharts from "apexcharts";

interface Table{
  handleSensor: (e: any) => void;
}

export default function Table({ handleSensor }: Table) {

  var options2 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [-2],
    colors: ["#29f7ff"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#333',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "20px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#F9f9f9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
  new ApexCharts(document.querySelector("#chart2"), options2).render();

  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#247BA0"],
    series: [
      {
        name: "Temperatura",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
      {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Temperatura",
          style: {
            color: "#FF1654"
          }
        }
      },
    ],
    tooltip: {
      shared: false,
      intersect: false,
      x: {
        show: false
      }
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();  

  return (
    <div className="container-fluid">
      <div className="table absolute" style={{ marginTop: 170, marginLeft: 20, height: 500 }}>
        <div className="table-title">Sensor 1</div>
        <div id="chart2" className="mt-5"></div>
        {/* <div id="chart"></div> */}
        <button className="button" onClick={() => handleSensor("Sensor 1")} style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 420, height: 500 }}>
        <div className="table-title">Sensor 2</div>
        <button className="button" onClick={() => handleSensor("Sensor 2")} style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>

      <div className="table" style={{ marginTop: 170, marginLeft: 820, height: 500 }}>
        <div className="table-title">Sensor 3</div>
        <button className="button" onClick={() => handleSensor("Sensor 2")} style={{ marginTop: 400 }}>Mais detalhes</button>
      </div>
    </div>
  );
}