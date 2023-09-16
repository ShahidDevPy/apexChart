import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexHorizontalBarChart = () => {
    const seriesData = [
        {
            name: 'Open - In Process',
            data: [20, 17, 19, 18, 25],
        },
        {
            name: 'Open - Escalated',
            data: [18,20,19,21,16],
        },
        {
            name: 'Closed - NFA',
            data: [10,9,8,9,7],
        },
        {
            name: 'Closed - Escalated',
            data: [14,11,9,15,10],
        }
    ];

    const chartOptions = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 4,
                dataLabels: {
                    total: {
                        enabled: false,
                        offsetX: 0,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900,
                        },
                    },
                },
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },

        xaxis: {
            categories: ['Ray Lapid', 'Maria Santos', 'Elena Navarro', 'Teresa Gomez', 'Sofia Reyes'],
            labels: {
                formatter: function (val) {
                    return '';

                },
                style: {
                    fontSize: 13, // Adjust the font size for category labels
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },

        fill: {
            opacity: 1,
        },
        colors: ['#FF8717', '#FFC330','#00A71B','#B60202'],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetX: 40,

        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={350} width={653} />
        </div>
    );
};

export default ApexHorizontalBarChart;
