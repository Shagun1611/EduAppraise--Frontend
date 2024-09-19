import React, { useState } from 'react';
import data from '../../data/chart.json';
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.scss';

const RankChart = () => {

    // eslint-disable-next-line
    const [ chartData, setChartData ] = useState({
        labels: data.map((x) => x.time),
        datasets: [{
            label: "Rank",
            data: data.map((x) => x.rank),
            borderColor: '#0C4443',
            borderWidth: 1.5,
            pointBorderWidth: 1,
            tension: 0,
            fill: true,
            backgroundColor: 'rgba(12,68,67,0.2)',
        }]
    });

    return (
        <div className={styles.container}>
            <Line data={chartData} />
        </div>
    )
}

export default RankChart;
