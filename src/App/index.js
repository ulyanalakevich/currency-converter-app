import { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies.js";
import { Content } from "./styled";

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
    <Content>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Content>
  );
}

export default App;
