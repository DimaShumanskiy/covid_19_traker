import axios from "axios";


const baseURL = 'https://covid19.mathdro.id/api'

export type FetchDataType = {
    confirmed:BaseValuesType,
    recovered: BaseValuesType,
    deaths: BaseValuesType,
    lastUpdate: string
}
export type BaseValuesType ={
    detail: string
    value: number
}


export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(baseURL)

        return {confirmed,recovered,deaths,lastUpdate}
    } catch (e) {

    }
}
