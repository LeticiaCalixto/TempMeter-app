import { Line } from "react-chartjs-2";

export function ChartLine (){
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

    const labels = ['5h', '6h', '7h', '8h', '9h'];

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
        <Line data={data} options={options} />
    )
}