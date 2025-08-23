export default class Currency {
    /**
     * Constructs a new Currency instance.
     * @param {string} code - The currency code (e.g., 'USD').
     * @param {string} name - The name of the currency (e.g., 'United States Dollar').
     */
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */
    get code() {
        return this._code;
    }

    /**
     * Sets the currency code.
     * @param {string} value - The new currency code.
     */
    set code(value) {
        this._code = value;
    }

    /**
     * Gets the currency name.
     * @returns {string} The currency name.
     */
    get name() {
        return this._name;
    }

    /**
     * Sets the currency name.
     * @param {string} value - The new currency name.
     */
    set name(value) {
        this._name = value;
    }

    /**
     * Returns the full currency information in the format: name (code).
     * @returns {string} The formatted string.
     */
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
