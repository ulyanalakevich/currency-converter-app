import { Content } from "./styled"

export const Result = ({ result }) => (
    <Content>
        {!!result && (
            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.outputCurrency}
            </strong>
        )}
    </Content>
)

