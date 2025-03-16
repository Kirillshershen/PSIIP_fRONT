class Animal {
    speak() {
      console.log("Животное издаёт звук");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Собака лает");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Кошка мяукает");
    }
  }
  
  const animals = [new Dog(), new Cat(), new Animal()];
  animals.forEach(animal => animal.speak());
  /*
  Собака лает
  Кошка мяукает
  Животное издаёт звук
  */
  