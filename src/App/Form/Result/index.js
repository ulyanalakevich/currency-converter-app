import "./style.css"

export const Result = ({ result }) => (
    <p className="form__result">
        {!!result && (
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.outputCurrency}
            </strong>
        )}
    </p>
)

