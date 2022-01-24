import axios from "axios";
import {log} from "util";


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

export type CountriesType = {
    name: string
    iso2: string
    iso3: string
}
export const fetchData = async (country?: string) => {
    let changeableUrl = baseURL
    if(country) {
        changeableUrl = `${baseURL}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (e) {
        console.log(`fetchData: ${e}`)
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
        return modifiedData

    } catch (e) {
        console.log(`fetchDailyData: ${e}`)
    }
}
export const fetchCountries = async () => {
    try {
        const res = await axios.get(`${baseURL}/countries`)
        return res.data.countries.map((country: CountriesType) => country.name)
    } catch (e) {
        console.log(`countries: ${e}`)
    }
}