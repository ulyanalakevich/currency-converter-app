import { useState } from "react";
import "./style.css";
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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <Time />
                <h2 className="form__legend">
                    Kalkulator walut
                </h2>
                <p>
                    <label>
                        <span className="form__label">
                            Kwota do wymiany:
                        </span>
                        <input
                            className="form__field"
                            type="number"
                            step="0.01"
                            min="0"
                            value={amount}
                            required
                            onChange={({ target }) => setAmount(target.value)} /> </label>
                </p>
                <p>
                    <label>
                        <span className="form__label">
                            Z jakiej waluty wymieniasz:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__label">
                            Na jaką walute wymieniasz:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <button className="form__button">Przelicz</button>
                </p>
                <p className="form__paragraph">Otrzymasz:
                    <Result result={result} />
                </p>
            </fieldset>
        </form >
    )
}

