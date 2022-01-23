import axios from "axios";


const baseURL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(baseURL)
        return {confirmed,recovered,deaths,lastUpdate}
    } catch (e) {

    }
}

export  const fetchDailyData = async () =>{
    try {
        const {data}= await axios.get(`${baseURL}/daily`)
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(modifiedData)
        return modifiedData

    }catch (e) {

    }
}