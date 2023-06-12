import { Line } from "react-chartjs-2";

export function ChartLine ({ labels, datasets }: any){
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom' as const,
                labels: {
                    color: '#FFF'
                }
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            y: {
                ticks: {
                    color: '#FFF',
                },
            },
            x: {
                ticks: {
                    color: '#FFF',
                },
            }
        }
    };

    const data = {
        labels: labels,
        datasets: datasets
    };

    return (
        <Line data={data} options={options} />
    )
}