// Процедурный подход
let width = 10;
let height = 20;
function getArea(width, height) {
    return width * height;
}
console.log(getArea(width, height));

// ООП подход
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(10, 20);
console.log(rect.getArea());
