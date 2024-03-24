import { Bar } from 'react-chartjs-2';

const Chart = () => {
    return (
        <div>
            <Bar
                className='m-2 lg:p-3'
                data={{
                    labels: ["Views", "Subscriptions", "Likes"],
                    datasets: [
                        {
                            label: "Analytics",
                            data: [4000, 2000, 600],
                            backgroundColor: [
                                "green",
                                "purple",
                                "orange"
                            ]
                        }
                    ]
                }}
            />
        </div>
    );
}

export default Chart;
