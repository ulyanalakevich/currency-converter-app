import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect = (() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const { rates, date } = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                })

            } catch (error) {
                setRatesData({
                    state: "error",
                });
            };
        };
        setTimeout(getData, 1000);
    }, []);

return ratesData;
};

