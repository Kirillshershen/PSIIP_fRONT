class MyClass {
    static staticField = "I am a static field";
  
    static staticMethod() {
      console.log("This is a static method");
    }
  }
  
  // Вызов статического метода и поля через класс, без создания экземпляра
  console.log(MyClass.staticField);  // I am a static field
  MyClass.staticMethod();  // This is a static method
  