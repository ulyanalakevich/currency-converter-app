import { useState } from "react";
import { Fieldset, Header, Label, Component, Paragraph, ButtonStyle } from "./styled";
import { Result } from "./Result";
import { currencies } from "../currencies.js";
import { Time } from "./Time";

export const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState(currencies[0].name);
    const [outputCurrency, setOutputCurrency] = useState(currencies[0].name);

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        calculateResult(inputCurrency, outputCurrency, amount);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Time />
                <Header>
                    Kalkulator walut
                </Header>
                <p>
                    <label>
                        <Label>
                            Kwota do wymiany:
                        </Label>
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
                        <Label>
                            Z jakiej waluty wymieniasz:
                        </Label>
                        <Component
                            value={inputCurrency}
                            onChange={({ target }) => setInputCurrency(target.value)}>
                            {currencies.map((inputCurrency => (
                                <option
                                    key={inputCurrency.name}
                                    value={inputCurrency.name}
                                >
                                    {inputCurrency.name}
                                </option>
                            )))}
                        </Component>
                    </label>
                </p>
                <p>
                    <label>
                        <Label>
                            Na jaką walute wymieniasz:
                        </Label>
                        <Component
                            value={outputCurrency}
                            onChange={({ target }) => setOutputCurrency(target.value)}>
                            {currencies.map((outputCurrency => (
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
                </Paragraph>
            </Fieldset>
        </form >
    )
}

