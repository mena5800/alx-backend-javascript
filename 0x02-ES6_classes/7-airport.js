class Airport {
  constructor(name, code) {
    Airport._checkString(name, 'Name');
    Airport._checkString(code, 'Code');
    this._name = name;
    this._code = code;
  }

  static _checkString(value, name) {
    if (typeof value !== 'string') {
      throw new Error(`TypeError: ${name} must be a string`);
    }
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }
}

export default Airport;
