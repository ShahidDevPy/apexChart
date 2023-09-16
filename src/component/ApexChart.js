import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
    const chartData = {
        series: [
            {
                name: 'True Mules',
                data: [29, 108, 77, 30, 10],
            },
            {
                name: 'False Positives',
                data: [20, 41,14, 35, 42]
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 357,
                stacked: true,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 4,
                    dataLabels: {
                        total: {
                            enabled: false,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900,
                            },
                        },
                    },
                },
            },
            xaxis: {
                categories: ['Jan','Feb', 'Mar', 'Apr', 'May'],
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value; // Display the y-axis values as they are
                    },
                },
                tickAmount: 4, // Specify the number of ticks on the y-axis
                tickPlacement: 'between', // Place ticks between data points
                tickPositions: [], // Define specific tick positions
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',

            },
            fill: {
                opacity: 1,
            },
            colors: ['#FF4343', '#7D7D7D'],
        },
    }

    return (
        <div id="chart" style={{padding:10}}>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={357}
                width={550}
            />
        </div>
    );
};

export default ApexChart;
