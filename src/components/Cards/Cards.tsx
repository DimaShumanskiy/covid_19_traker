import React from 'react';
import s from './Cards.module.css'
import {FetchDataType} from "../../api/indexApi";

type CardsPropsType = {
    data: FetchDataType | undefined
}
const Cards = (props:CardsPropsType) => {
    console.log(props)

    return (
        <div>
            cards
        </div>
    );
};

export default Cards;