import React, {useEffect, useState} from 'react';
import s from './CauntryPicker.module.css'
import {NativeSelect, FormControl} from "@material-ui/core";
import {fetchCountries} from '../../api/indexApi'

type CountryPickerType={
    handleCountryChange: (e: string) =>void
}
const CountryPicker = ({handleCountryChange}:CountryPickerType) => {

    const [fetchedCountries, setFetchedCountries] = useState<any>([])
    useEffect(() => {
        (async () => {
            setFetchedCountries( await fetchCountries())
        })()
    }, [setFetchedCountries])

    return (
        <FormControl className={s.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country: string, i: number) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;