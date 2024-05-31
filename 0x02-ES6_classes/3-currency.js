class Currency {
  constructor(code, name) {
    Currency._checkString(code, 'Code');
    Currency._checkString(name, 'Name');

    this._code = code;
    this._name = name;
  }

  static _checkString(value, name) {
    if (typeof value !== 'string') {
      throw new Error(`TypeError: ${name} must be a string`);
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    Currency._checkString(value, 'Code');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    Currency._checkString(value, 'Name');
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
