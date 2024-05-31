import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    Pricing._checkNumber(amount, 'Amount');
    Pricing._checkCurrency(currency, 'Currency');

    this._amount = amount;
    this._currency = currency;
  }

  static _checkCurrency(value, name) {
    if (value.constructor !== Currency) {
      throw new Error(`TypeError: ${name} must be a Currency`);
    }
  }

  static _checkNumber(value, name) {
    if (typeof value !== 'number') {
      throw new Error(`TypeError: ${name} must be a number`);
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    Pricing._checkNumber(value, 'Amount');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    Pricing._checkCurrency(value, 'Currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing._checkNumber(amount);
    Pricing._checkNumber(conversionRate);

    return amount * conversionRate;
  }
}

export default Pricing;
