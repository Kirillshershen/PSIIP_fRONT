class MyClass {
    // Публичное поле
    publicField = "I am public";
    
    // Приватное поле
    #privateField = "I am private";
  
    // Публичный метод
    publicMethod() {
      console.log(this.publicField);
    }
  
    // Приватный метод
    #privateMethod() {
      console.log(this.#privateField);
    }
  
    // Метод, использующий приватный метод
    usePrivateMethod() {
      this.#privateMethod();
    }
  }
  
  const obj = new MyClass();
  obj.publicMethod();  // I am public
  // obj.#privateMethod(); // Ошибка, метод приватный
  obj.usePrivateMethod();  // I am private
  