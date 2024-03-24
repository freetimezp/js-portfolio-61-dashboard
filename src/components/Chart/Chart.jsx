import { Chart as Chartjs } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    return (
        <div>
            <Bar
                className='m-2'
                data={{
                    labels: ["Views", "Subscriptions", "Likes", "Sales"],
                    datasets: [
                        {
                            label: "Analytics",
                            data: [4000, 2000, 600, 1250],
                            backgroundColor: [
                                "green",
                                "purple",
                                "orange",
                                "blue"
                            ]
                        }
                    ]
                }}
            />
        </div>
    );
}

export default Chart;
