class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    displayInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}

let user = new User('Alice', 'alice@example.com');
console.log(user.username); // Alice
user.displayInfo(); // Username: Alice, Email: alice@example.com
