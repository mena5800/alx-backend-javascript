class Building {
  constructor(sqft) {
    Building._checkNumber(sqft, 'Sqft');
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined) {
      Building.evacuationWarningMessage();
    }
  }

  static _checkNumber(value, name) {
    if (typeof value !== 'number') {
      throw new Error(`TypeError: ${name} must be a number`);
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    Building._checkNumber(value, 'Sqft');
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  static evacuationWarningMessage() {
    throw Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}

export default Building;
