class Animal {
  static nums = 0;
  constructor(name) {
    this.name = name;
    Animal.nums += 1;
  }

  sound(){
    console.log(`${this.name} is ${this.constructor.name} make noise.`);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    super.sound()
    console.log("ooooooooooooooooooooow");
  }
}


class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}


const lion1 = new Lion("roney");
const dog1 = new Dog("mm");


lion1.sound()