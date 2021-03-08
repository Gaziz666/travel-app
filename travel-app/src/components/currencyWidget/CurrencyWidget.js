import React, { useState, useEffect } from 'react';
import classes from './CurrencyWidget.module.css';

const CURRENCY_EXCHANGE = ['USD', 'EUR', 'RUB'];
const currencyBase = {
    currency: 'Thai Baht',
    rate: 'THB'
}
const CURRENCY_API = `https://api.exchangeratesapi.io/latest?base=${currencyBase.rate}`;


export default function CurrencyWidget() {

    const [outputCurrency, setOutputCurrency] = useState([]);

    useEffect(() => {
        fetch(CURRENCY_API)
            .then(res => res.json())
            .then(data => {
                CURRENCY_EXCHANGE.map(rate => {
                    Object.entries(data.rates).forEach(
                        ([key, value]) => {
                            if (key === rate) {
                                setOutputCurrency(outputCurrency.push(key + ':' + value.toFixed(2)));
                            }

                        }
                    );

                })

            })

    }, [])

    return (
        <div className={classes.widget}>
            <div>{currencyBase.currency}</div>
            {/* {
                outputCurrency.map((item, index) =>
                    <div key={index} value={item}></div>
                )

            } */}

        </div>
    )
}
