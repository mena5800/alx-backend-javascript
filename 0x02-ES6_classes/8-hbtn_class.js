class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._loacation = location;
  }

  toString() {
    return this._loacation;
  }

  valueOf() {
    return this._size;
  }
}

export default HolbertonClass;
