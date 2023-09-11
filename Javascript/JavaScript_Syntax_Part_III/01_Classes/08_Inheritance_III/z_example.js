class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
    
  incrementBehavior() {
    this._behavior++;
  }
} 

class Dog extends Animal {
  constructor(name, isGood) {
    super(name);
    this._ = isGood;
  }
}

const newDog=new Dog("Tim",!false);
console.log(newDog.name);

