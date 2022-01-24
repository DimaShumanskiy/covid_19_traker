import React from 'react';
import s from './Cards.module.css'
import {BaseValuesType, FetchDataType} from "../../api/indexApi";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames'

type CardsPropsType = {
    data: FetchDataType | undefined
}

const Cards = ({data}: CardsPropsType) => {
    if (!data?.confirmed) {
        return <div>"Loading.."</div>
    }
    return (
        <div className={s.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={data?.confirmed.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={data?.recovered.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(s.card, s.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={data?.deaths.value} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(data?.lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;