import { useState } from "react";
import { Fieldset, Header, LabelText, Component, Loading, Fail, Paragraph, Text, ButtonStyle } from "./styled";
import { Result } from "./Result";
import { Date } from "./Time";
import { useRatesData } from "./useRatesData.js";

export const Form = () => {
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const ratesData = useRatesData();

    const calculateResult = (outputCurrency, inputCurrency, amount) => {
        const inputRate = ratesData.rates[inputCurrency]
        const outputRate = ratesData.rates[outputCurrency]

        setResult({
            targetAmount: (amount * inputRate) / outputRate,
            outputCurrency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(inputCurrency, outputCurrency, amount);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Date />
                <Header>
                    Kalkulator walut
                </Header>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Trwa ładowanie...
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Fail>
                                Oops, coś poszło nie tak. Spróbuj później...
                            </Fail>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <LabelText>
                                            Kwota do wymiany:
                                        </LabelText>
                                        <Component as="input"
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            value={amount}
                                            required
                                            onChange={({ target }) => setAmount(target.value)} /> </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>
                                            Z jakiej waluty wymieniasz:
                                        </LabelText>
                                        <Component
                                            value={inputCurrency}
                                            onChange={({ target }) => setInputCurrency(target.value)}>
                                            {Object.keys(ratesData.rates).map((inputCurrency => (
                                                <option
                                                    key={inputCurrency}
                                                    value={inputCurrency}
                                                >
                                                    {inputCurrency}
                                                </option>
                                            )))}
                                        </Component>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>
                                            Na jaką walute wymieniasz:
                                        </LabelText>
                                        <Component
                                            value={outputCurrency}
                                            onChange={({ target }) => setOutputCurrency(target.value)}>
                                            {Object.keys(ratesData.rates).map((outputCurrency => (
                                                <option
                                                    key={outputCurrency.name}
                                                    value={outputCurrency.name}
                                                >
                                                    {outputCurrency.name}
                                                </option>
                                            )))}
                                        </Component>
                                    </label>
                                </p>
                                <p>
                                    <ButtonStyle>Przelicz</ButtonStyle>
                                </p>
                                <Paragraph>Otrzymasz:
                                    <Result result={result} />
                                    <Text>Kursy walut pobierane są z Europejskiego Banku Centralnego.
                                        <br />Aktualne na dzień:<strong>{ratesData.date}</strong>
                                    </Text>
                                </Paragraph>
                            </>
                        ))
                }
            </Fieldset>
        </form >
    )
};
