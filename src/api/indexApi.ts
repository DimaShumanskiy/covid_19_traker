import axios from "axios";


const baseURL = 'https://covid19.mathdro.id/api'

export type FetchDataType = {
    confirmed: BaseValuesType,
    recovered: BaseValuesType,
    deaths: BaseValuesType,
    lastUpdate: string
}
export type BaseValuesType = {
    detail: string
    value: number
}

export type DailyDataType = {
    confirmed: confirmedType
    deaths: deathsType
    reportDate: string

}
type confirmedType = {
    total: number
}
type deathsType = {
    total: number
}
export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(baseURL)

        return {confirmed, recovered, deaths, lastUpdate}
    } catch (e) {

    }
}
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get<Array<DailyDataType>>(`${baseURL}/daily`)
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(modifiedData)
        return modifiedData

    } catch (e) {

    }
}
