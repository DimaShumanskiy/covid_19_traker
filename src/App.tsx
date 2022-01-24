import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';

import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from "./api/indexApi";
import coronaImage from './imeges/image.png'


function App() {
    const [data, setData] = useState<any>()
    const [country, setCountry] = useState<string>()

    useEffect(() => {
        (async () => {
            setData(await fetchData())
        })()
    }, [])

    const handleCountryChange = async (country:string) =>{
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
    }

    return (
        <div className={s.container}>
            <img className={s.img} src={coronaImage} alt="corona image"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}

export default App;
