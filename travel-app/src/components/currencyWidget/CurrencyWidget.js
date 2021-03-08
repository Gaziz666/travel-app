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
        let cleanupFunction = false;
        const request = async () => {
            try {
                const response = await fetch(CURRENCY_API);
                const data = await response.json();
                CURRENCY_EXCHANGE.map(rate => {
                    Object.entries(data.rates).map(
                        ([key, value]) => {
                            if (key === rate) {
                                if (!cleanupFunction) {
                                    setOutputCurrency(outputCurrency => {
                                        return [
                                            ...outputCurrency, `${key}: ${value.toFixed(2)}`
                                        ]
                                    })
                                }
                            }
                        }
                    );

                })

            } catch (e) {
                console.error(e.message)
            }
            return () => cleanupFunction = true;
        }

        request();

    }, [])

    const ouputC = () => {
        return (
            outputCurrency.map((item, index) => (
                <div key={index} >{item}</div>
            ))
        )
    }

    return (
        <div className={classes.widget}>
            <div>{currencyBase.currency}</div>
            {ouputC()}
        </div>
    )
}
