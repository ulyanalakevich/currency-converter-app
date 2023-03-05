import "./style.css"

export const Result = ({ result }) =>
{!!result && (
<strong className="form__result"> {result.targetAmount.toFixed(2)}&nbsp;{result.outputCurrency}</strong>
)}

