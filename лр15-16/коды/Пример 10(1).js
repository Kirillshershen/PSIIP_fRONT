class User {
    #password;  // приватное поле
  
    constructor(username, password) {
      this.username = username;
      this.#password = password;
    }
  
    // публичный метод, предоставляющий доступ к приватным данным
    checkPassword(inputPassword) {
      return this.#password === inputPassword;
    }
  }
  
  const user = new User("user1", "secretPassword");
  console.log(user.checkPassword("secretPassword"));  // true
  // console.log(user.#password);  // Ошибка, поле приватное
  