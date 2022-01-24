import React, {useEffect, useState} from 'react';
import s from './Chart.module.css'
import {fetchDailyData} from "../../api/indexApi";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend);

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        (async () => {
            setDailyData(await fetchDailyData())
        })()
    }, [])

    const lineCart = (
        dailyData.length
            ? (
                <Line
                    // options={config}
                    data={{
                        labels: dailyData.map(({date}) => date),
                        datasets: [{
                            data: dailyData.map(({confirmed}) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        }, {
                            data: dailyData.map(({deaths}) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        }
                        ],
                    }}/>
            ) : null
    )
    const barChart = (
        data?.confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgb(0, 0, 255, 0.5)',
                                'rgb(0, 255, 0, 0.5)',
                                'rgb(255, 0, 0, 0.5)'
                            ],
                            data: [data?.confirmed.value, data?.recovered.value, data?.deaths.value]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current state in ${country}`}
                    }}
                />
            ) : null
    )
    return (
        <div className={s.container}>
            {country ? barChart : lineCart}
        </div>
    );
};

export default Chart;