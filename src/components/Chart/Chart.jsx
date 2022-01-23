import React, {useEffect, useState} from 'react';
import s from './Chart.module.css'
import {fetchDailyData} from "../../api";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        (async () => {
            setDailyData(await fetchDailyData())
        })()
    }, [])
    console.log(dailyData)


    const config = {
        type: 'line',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        },
    };

const lineCart = (
    dailyData.length
        ? (
            <Line options={config}
                data={{
                labels: dailyData.map(({date}) => date) ,
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label:'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label:'Infected',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                }
                ],
            }}/>
        ) : null
)

return (
    <div className={s.container}>
        {lineCart}
        <h1>dsada</h1>
    </div>
);
}
;

export default Chart;