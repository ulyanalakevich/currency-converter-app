import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                Kalkulator walut
            </legend>
            <p>
                <label className="form__label"> Kwota do wymiany: <input className="form__field"
                    type="number" name="amount" step="0.01" min="0" required /> </label>
            </p>
            <p>
                <label className="form__label">
                    Z jakiej waluty wymieniasz <select className="form__field" name="inputCurrency">
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p>
                <label className="form__label">
                    Na jaką walute wymieniasz <select className="form__field" name="outputCurrency">
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__paragraph">Otrzymasz:<strong className="form__result"> N/A</strong></p>
        </fieldset>
    </form>
)

export default Form;