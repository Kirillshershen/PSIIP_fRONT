class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} издаёт звук`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} лает`);
    }
  }
  
  const dog = new Dog("Барсик");
  dog.speak();  // Барсик лает
  