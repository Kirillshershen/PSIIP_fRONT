class Person {
    constructor(name) {
      this._name = name;  // поле с приватным доступом по соглашению
    }
  
    // Геттер
    get name() {
      return this._name;
    }
  
    // Сеттер
    set name(value) {
      if (value.length > 0) {
        this._name = value;
      } else {
        console.log("Имя не может быть пустым");
      }
    }
  }
  
  const person = new Person("John");
  console.log(person.name);  // John
  
  person.name = "Alice";  // Изменение значения через сеттер
  console.log(person.name);  // Alice
  
  person.name = "";  // Имя не может быть пустым
  