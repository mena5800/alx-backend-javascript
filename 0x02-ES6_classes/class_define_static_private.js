class Rect {
  static #num = 0;
  constructor(height, width) {
    this.height = height;
    this.width = width;
    Rect.#num += 1;

  }

  static nums(){
    return Rect.#num;
  }
}

const rect1 = new Rect(10, 5);
const rect2 = new Rect(15, 5);


rect1.nums()


console.log(Rect.nums())