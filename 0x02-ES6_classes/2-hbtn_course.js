class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    HolbertonCourse.checkListStrings(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static checkListStrings(value) {
    if (!(Array.isArray(value) && value.every((item) => typeof item === 'string'))) {
      throw new Error('TypeError: Students must be a object');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.checkListStrings(value);
    this._students = value;
  }
}

export default HolbertonCourse;
