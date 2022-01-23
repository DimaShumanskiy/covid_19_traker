import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Cards, CountryPicker,Chart } from './components'
import {fetchData} from './api'


function App() {
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const fetchedData = await fetchData()
            setData(fetchedData)
        })()
    }, [])

    console.log(data)

    return (
        <div className={s.container}>
            <h1>app</h1>
            <Cards data={data}/>
            <CountryPicker/>
            <Chart/>
        </div>
    )
}


export default App;
