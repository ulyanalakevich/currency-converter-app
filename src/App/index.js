import React, { useState } from "react";
import { Form } from "./Form";
import "./App.css";
import { currencies } from "./currencies.js";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (inputCurrency, outputCurrency, amount) => {
    const inputCurrencyRate = currencies
      .find(({ name }) => name === inputCurrency)
      .rate;
    const outputCurrencyRate = currencies
      .find(({ name }) => name === outputCurrency)
      .rate;

    setResult({
      targetAmount: (amount * inputCurrencyRate) / outputCurrencyRate,
      outputCurrency,
    });
  }


  return (
    <div className="app">
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
