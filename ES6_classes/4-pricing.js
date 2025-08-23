import { Currency } from './3-currency.js';

export class Pricing {
    /**
     * Constructs a new Pricing instance.
     * @param {number} amount - The price amount.
     * @param {Currency} currency - The currency object.
     */
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    /**
     * Gets the price amount.
     * @returns {number} The amount.
     */
    get amount() {
        return this._amount;
    }

    /**
     * Sets the price amount.
     * @param {number} value - The new amount.
     */
    set amount(value) {
        this._amount = value;
    }

    /**
     * Gets the currency object.
     * @returns {Currency} The currency.
     */
    get currency() {
        return this._currency;
    }

    /**
     * Sets the currency object.
     * @param {Currency} value - The new currency object.
     */
    set currency(value) {
        this._currency = value;
    }

    /**
     * Returns the full price information in the format: amount currency_name (currency_code).
     * @returns {string} The formatted string.
     */
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    /**
     * Converts a price amount using a conversion rate.
     * @param {number} amount - The initial amount.
     * @param {number} conversionRate - The conversion rate.
     * @returns {number} The converted amount.
     */
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}